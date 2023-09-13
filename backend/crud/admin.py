from crud.base import CRUDBase
from sqlalchemy.orm import Session
from schemas.teacher import TeacherCreate, TeacherInDB
from schemas.student import StudentCreate, StudentInDB
from schemas.user import ResetPassword
from models import User, Teacher, Student, Selection, Result, Topic, Rounds
from fastapi.encoders import jsonable_encoder
from core.security import get_password_hash
from fastapi import HTTPException
from sqlalchemy.exc import SQLAlchemyError
import random
from sqlalchemy import not_, select, and_
from schemas.topic import TopicRequest, TopicAudit
from schemas.public import PublicTime
from models.topic import Topic
from models.status import Status
from typing import Any
from sqlalchemy.orm import aliased
from schemas.result import GetAllResult


class CRUDAdmin(CRUDBase):
    def create_user(self, db: Session, number, role):
        existing_user = db.query(User).filter(User.number == number).first()
        if existing_user:
            raise HTTPException(
                status_code=400, detail="User already exists with this number"
            )

        user = self.model(
            number=number,
            password=get_password_hash(number),
            role=role,
        )
        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    def create_teacher(self, db: Session, teacher_params: TeacherCreate):
        teacher_data = jsonable_encoder(teacher_params)
        try:
            user = self.create_user(db, teacher_data["number"], 1)
            teacher = Teacher(
                user_id=user.id,
                number=teacher_data["number"],
                name=teacher_data["teacher_name"],
                major=teacher_data["major"],
                level=teacher_data["level"],
                origin=teacher_data["origin"],
            )
            db.add(teacher)
            db.commit()
            db.refresh(teacher)
        except SQLAlchemyError as e:
            db.rollback()
            db.delete(user)
            db.commit()
            raise HTTPException(
                status_code=500, detail="Failed to create teacher"
            ) from e

    def create_student(self, db: Session, student_params: StudentCreate):
        student_data = jsonable_encoder(student_params)
        try:
            user = self.create_user(db, student_data["number"], 2)
            student = Student(
                user_id=user.id,
                number=student_data["number"],
                name=student_data["student_name"],
                major=student_data["major"],
                grade=student_data["grade"],
                team=student_data["team"],
                phone=student_data["phone"],
                random=-1,
            )
            db.add(student)
            db.commit()
            db.refresh(student)
            self.assign_random_number(
                db, grade=student_data["grade"]
            )  # 每当添加学生时都会重新分配随机数，有待改进
        except SQLAlchemyError as e:
            db.rollback()
            db.delete(user)
            db.commit()
            raise HTTPException(
                status_code=500, detail="Failed to create student"
            ) from e

    def create_teachers(self, db: Session, teacher_params: list):
        for teacher_param in teacher_params:
            self.create_teacher(db, teacher_param)

    def create_students(self, db: Session, student_params: list):
        for student_param in student_params:
            self.create_student(db, student_param)

    def assign_random_number(self, db: Session, grade: str):
        student_random_list = db.query(Student).filter(Student.grade == grade).all()
        length = len(student_random_list)
        random_num = random.sample(range(1, length + 1), length)
        sum = 0
        for i in range(length):
            sum += student_random_list[i].random
            student_random_list[i].random = random_num[i]
        if sum != self.calculate_sum(length):
            db.commit()
        else:
            db.rollback()

    def calculate_sum(self, length: int):
        return sum(range(1, length + 1))

    def start_matching(self, db: Session, grade: str, round: int):
        choices = range(1, 5)  # 选择的范围：1到4

        for choice in choices:
            # 查询选择了相同课题的学生记录
            has_chosen_student_id = (
                select(Result.user_id)
                .where(and_(Result.grade == grade, Result.round == round))
                .subquery()
            )
            has_chosen_id = (
                select(Result.topic_id)
                .where(and_(Result.grade == grade, Result.round == round))
                .subquery()
            )
            query = (
                db.query(
                    getattr(Selection, f"choice{choice}_id"),
                )
                .filter(Selection.grade == grade)
                .filter(Selection.round == round)
                .group_by(getattr(Selection, f"choice{choice}_id"))
                .filter(
                    not_(
                        getattr(Selection, f"choice{choice}_id").in_(
                            select(has_chosen_id)
                        )
                    )
                )
                .filter(not_(getattr(Selection, f"choice{choice}_id") == -1))
                .filter(not_(Selection.user_id.in_(select(has_chosen_student_id))))
                .all()
            )
            for id in query:
                if choice == 1 or choice == 3:
                    instert_result = (
                        db.query(Selection)
                        .filter(getattr(Selection, f"choice{choice}_id") == id[0])
                        .filter(Selection.grade == grade)
                        .order_by(Selection.random.asc())
                        .first()
                    )
                elif choice == 2 or choice == 4:
                    instert_result = (
                        db.query(Selection)
                        .filter(getattr(Selection, f"choice{choice}_id") == id[0])
                        .filter(Selection.grade == grade)
                        .order_by(Selection.random.desc())
                        .first()
                    )
                if instert_result:
                    self.insert_result(db, instert_result, id[0], round, choice)

    def insert_result(
        self, db: Session, selection: Selection, topic_id: int, round: int, choice: int
    ):
        result = Result(
            user_id=selection.user_id,
            student_number=selection.student_number,
            topic_id=topic_id,
            topic_number=getattr(selection, f"choice{choice}_number"),
            round=round,
            choice=choice,
            grade=selection.grade,
        )
        db.add(result)
        db.commit()

    def force_assign_topics(self, db: Session, student_number: str, topic_number: str):
        user_id = db.query(Student).filter(Student.number == student_number).first()
        topic_id = db.query(Topic).filter(Topic.number == topic_number).first()
        try:
            user_id_in_result = (
                db.query(Result).filter(Result.user_id == user_id.user_id).first()
            )
        except Exception:
            user_id_in_result = False

        try:
            topic_id_in_result = (
                db.query(Result).filter(Result.topic_id == topic_id.id).first()
            )
        except Exception:
            topic_id_in_result = False

        if user_id_in_result or topic_id_in_result:
            raise HTTPException(
                status_code=400, detail="The student or topic has been chosen"
            )
        elif not (user_id and topic_id):
            raise HTTPException(
                status_code=400, detail="The student or topic not exist"
            )
        elif user_id.major != topic_id.major:
            raise HTTPException(
                status_code=400, detail="The student and topic not in the same major"
            )
        else:
            result = Result(
                user_id=user_id.id,
                student_number=student_number,
                topic_id=topic_id.id,
                topic_number=topic_number,
                round=0,
                choice=0,
                grade=user_id.grade,
            )
            db.add(result)
            db.commit()

    def get_all_topics(self, db: Session):
        topics = db.query(Topic).all()
        topics = [
            TopicRequest(
                id=topic.id,
                number=topic.number,
                name=topic.name,
                whether_background=topic.whether_background,
                have_bg_id=topic.have_bg_id,
                have_bg_else=topic.have_bg_else,
                category=topic.category,
                synopsis=topic.synopsis,
                remark=topic.remark,
                user_id=topic.user_id,
                teacher_name=topic.teacher_name,
                whether_pass=topic.whether_pass,
                major=topic.major,
                grade=topic.grade,
            )
            for topic in topics
        ]
        if not topics:
            raise HTTPException(status_code=404, detail="Topics not found")
        return topics

    def get_detail_topics(self, topic_id, db: Session):
        topics = db.query(Topic).filter(Topic.id == topic_id).first()
        topics = TopicRequest(
            id=topics.id,
            number=topics.number,
            name=topics.name,
            whether_background=topics.whether_background,
            have_bg_id=topics.have_bg_id,
            have_bg_else=topics.have_bg_else,
            category=topics.category,
            synopsis=topics.synopsis,
            remark=topics.remark,
            user_id=topics.user_id,
            teacher_name=topics.teacher_name,
            whether_pass=topics.whether_pass,
            major=topics.major,
            grade=topics.grade,
        )

        if not topics:
            raise HTTPException(status_code=404, detail="Topics not found")
        return topics

    def audit_topic(self, db: Session, topic_params: TopicAudit, user_id: Any):
        try:
            # 查询对应的主题记录
            for topics in topic_params:
                topic = db.query(Topic).filter(Topic.id == topics.id).first()

                if not topic:
                    # 如果找不到对应的主题记录，抛出 HTTPException
                    raise HTTPException(status_code=404, detail="Topic not found")

                # 更新主题记录的属性

                setattr(topic, "whether_pass", True)

                # 提交事务
                db.commit()

        except SQLAlchemyError as e:
            # 处理数据库操作异常
            db.rollback()
            raise HTTPException(status_code=500, detail="Failed to update topic") from e

    def update_round(self, db: Session, round_params):
        number = db.query(Rounds).all()
        if len(number) == 0:
            rounds = Rounds(id=1, round=round_params.round)
            db.add(rounds)
            db.commit()
            db.refresh(rounds)
        else:
            round = db.query(Rounds).filter(Rounds.id == 1).first()
            round.round = round_params.round
            db.commit()

    def update_end_time(self, db: Session, status_params: PublicTime, status_id: Any):
        try:
            # 查询对应的主题记录
            status = db.query(Status).filter(Status.id == status_id).first()

            if not status:
                # 如果找不到对应的主题记录，抛出 HTTPException
                raise HTTPException(status_code=404, detail="status not found")

            # 更新主题记录的属性
            for field, value in status_params.dict().items():
                setattr(status, field, value)

            # 提交事务
            db.commit()

            # 返回更新后的主题记录
            return status

        except SQLAlchemyError as e:
            # 处理数据库操作异常
            db.rollback()
            raise HTTPException(
                status_code=500, detail="Failed to update status"
            ) from e

    def update_student_info(
        self, db: Session, student_params: StudentInDB, student_id: Any
    ):
        try:
            # 查询对应的主题记录
            student = db.query(Student).filter(Student.id == student_id).first()

            if not student:
                # 如果找不到对应的主题记录，抛出 HTTPException
                raise HTTPException(status_code=404, detail="student not found")

            # 更新主题记录的属性
            for field, value in student_params.dict().items():
                setattr(student, field, value)

            # 提交事务
            db.commit()

            # 返回更新后的主题记录
            return student

        except SQLAlchemyError as e:
            # 处理数据库操作异常
            db.rollback()
            raise HTTPException(
                status_code=500, detail="Failed to update student"
            ) from e

    def update_teacher_info(
        self, db: Session, teacher_params: TeacherInDB, teacher_id: Any
    ):
        try:
            # 查询对应的主题记录
            teacher = db.query(Teacher).filter(Teacher.id == teacher_id).first()

            if not teacher:
                # 如果找不到对应的主题记录，抛出 HTTPException
                raise HTTPException(status_code=404, detail="teacher not found")

            # 更新主题记录的属性
            for field, value in teacher_params.dict().items():
                setattr(teacher, field, value)

            # 提交事务
            db.commit()

            # 返回更新后的主题记录
            return teacher

        except SQLAlchemyError as e:
            # 处理数据库操作异常
            db.rollback()
            raise HTTPException(
                status_code=500, detail="Failed to update teacher"
            ) from e

    def update_user_password(
        self,
        db: Session,
        user_number: ResetPassword,
    ):
        try:
            # 查询对应的主题记录
            user = db.query(User).filter(User.number == user_number.number).first()
            if not user:
                # 如果找不到对应的主题记录，抛出 HTTPException
                raise HTTPException(status_code=404, detail="user not found")

            user.password = get_password_hash(user.number)
            # 提交事务
            db.commit()
            # 返回更新后的主题记录
            return user

        except SQLAlchemyError as e:
            # 处理数据库操作异常
            db.rollback()
            raise HTTPException(
                status_code=500, detail="Failed to update password"
            ) from e

    def get_all_result(self, db: Session):
        StudentAlias = aliased(Student, name="student_alias")
        TopicAlias = aliased(Topic, name="topic_alias")

        # 定义查询并使用 .select_from() 方法
        results = (
            db.query(
                Result.id,
                StudentAlias.number,
                StudentAlias.name,
                TopicAlias.name.label("topic_name"),
                TopicAlias.number.label("topic_number"),
                TopicAlias.teacher_name.label("teacher_name"),
                Result.grade,
            )
            .select_from(Result)
            .join(StudentAlias, Result.user_id == StudentAlias.user_id)
            .join(TopicAlias, Result.topic_id == TopicAlias.id)
            .all()
        )
        results = [
            GetAllResult(
                result_id=result[0],
                student_number=result[1],
                student_name=result[2],
                topic_name=result[3],
                topic_number=result[4],
                teacher_name=result[5],
                grade=result[6],
            )
            for result in results
        ]
        return results


crud_admin = CRUDAdmin(User)
