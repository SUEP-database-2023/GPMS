from crud.base import CRUDBase
from sqlalchemy.orm import Session
from schemas.teacher import TeacherCreate,TeacherUpdate
from schemas.student import StudentCreate
from models import User, Teacher, Student
from fastapi.encoders import jsonable_encoder
from core.security import get_password_hash
from fastapi import HTTPException
from sqlalchemy.exc import SQLAlchemyError
from schemas.topic import TopicRequest,TopicAudit
from schemas.public import PublicTime
from models.topic import Topic
from models.status import Status
from typing import Any
from datetime import datetime
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

    def get_all_topics(self, db: Session):
        topics = db.query(Topic).all()
        topics = [
            TopicRequest(
                topic_number=topic.number,
                topic_name=topic.name,
                whether_background=topic.whether_background,
                have_bg_id=topic.have_bg_id,
                have_bg_else=topic.have_bg_else,
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

    def audit_topic(
        self, db: Session, topic_params: TopicAudit, topic_id: Any, user_id: Any
    ):
        try:
            # 查询对应的主题记录
            topic = db.query(Topic).filter(Topic.id == topic_id).first()

            if not topic:
                # 如果找不到对应的主题记录，抛出 HTTPException
                raise HTTPException(status_code=404, detail="Topic not found")

            if topic.user_id != user_id:
                raise HTTPException(status_code=404, detail="not your topic")

            # 更新主题记录的属性
            for field, value in topic_params.dict().items():
                setattr(topic, field, value)

            # 提交事务
            db.commit()

            # 返回更新后的主题记录
            return topic

        except SQLAlchemyError as e:
            # 处理数据库操作异常
            db.rollback()
            raise HTTPException(status_code=500, detail="Failed to update topic") from e
        
    
    def update_end_time(
        self, db: Session, status_params: PublicTime, status_id: Any
    ):
        
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
            raise HTTPException(status_code=500, detail="Failed to update status") from e
        
crud_admin = CRUDAdmin(User)
