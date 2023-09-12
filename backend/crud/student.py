from crud.base import CRUDBase
from fastapi.encoders import jsonable_encoder
from models import Topic, Selection, Student, Result
from fastapi import HTTPException
from sqlalchemy import not_
from schemas.topic import StudentGetTopic
from schemas.topic import StudentGetTopicDetail
from sqlalchemy.orm import Session
from schemas.selection import StudentGetSelection
from schemas.result import ResultBase


class CRUDStudent(CRUDBase):
    def create_selection(self, db, status, selection_params, user_id):
        selection_data = jsonable_encoder(selection_params)
        student_number = db.query(Student).filter(Student.user_id == user_id).first()

        def get_choice_number(topic_id):
            result = db.query(Result).filter(Result.topic_id == topic_id).first()
            choice_number = db.query(Topic).filter(Topic.id == topic_id).first()
            if not choice_number:
                raise HTTPException(status_code=400, detail="no topic found")
            elif student_number.grade != choice_number.grade:
                raise HTTPException(status_code=400, detail="grade not match")
            elif student_number.major != choice_number.major:
                raise HTTPException(status_code=400, detail="major not match")
            elif result:
                raise HTTPException(status_code=400, detail="topic already chosen")

            else:
                return choice_number.number

        selection = Selection(
            **selection_data,
            user_id=user_id,
            student_number=student_number.number,
            round=status,
            grade=student_number.grade,
            random=student_number.random,
        )
        choice_numbers = ["choice1_id", "choice2_id", "choice3_id", "choice4_id"]
        for choice in choice_numbers:
            choice_id = selection_data[choice]
            if choice_id != -1:
                choice_number = get_choice_number(choice_id)
                choice_number_attr = choice.replace("_id", "_number")
                setattr(selection, choice_number_attr, choice_number)

        existing_selection = (
            db.query(Selection)
            .filter(Selection.user_id == user_id)
            .filter(Selection.round == status)
            .first()
        )

        if existing_selection:
            raise HTTPException(
                status_code=400, detail="Selection already exists for this user"
            )
        else:
            db.add(selection)
            db.commit()
            db.refresh(selection)
            return selection

    def get_topic(self, db):
        used_topic = db.query(Result.topic_id)
        result = (
            db.query(Topic.name, Topic.id, Topic.category, Topic.number)
            .filter(not_(Topic.id.in_(used_topic)))
            .all()
        )
        result = [
            StudentGetTopic(
                name=topic[0], id=topic[1], category=topic[2], number=topic[3]
            )
            for topic in result
        ]
        return result

    def get_topic_detail(self, db: Session, topic_id):
        topic = (
            db.query(Topic.synopsis, Topic.remark, Topic.name)
            .filter(Topic.id == topic_id)
            .first()
        )
        topic = StudentGetTopicDetail(synopsis=topic[0], remark=topic[1], name=topic[2])
        return topic

    def get_selection(self, db, user_id, select_status):
        selection = (
            db.query(Selection)
            .filter(Selection.user_id == user_id)
            .filter(Selection.round == select_status)
            .first()
        )
        if not selection:
            raise HTTPException(status_code=404, detail="Selection not found")
        else:
            selection = StudentGetSelection(
                choice1_id=selection.choice1_id,
                choice2_id=selection.choice2_id,
                choice3_id=selection.choice3_id,
                choice4_id=selection.choice4_id,
                time=selection.time,
                choice1_number=selection.choice1_number,
                choice2_number=selection.choice2_number,
                choice3_number=selection.choice3_number,
                choice4_number=selection.choice4_number,
                choice1_name=self.get_topic_name(db, selection.choice1_id),
                choice2_name=self.get_topic_name(db, selection.choice2_id),
                choice3_name=self.get_topic_name(db, selection.choice3_id),
                choice4_name=self.get_topic_name(db, selection.choice4_id),
            )
            return selection

    def get_topic_name(self, db, topic_id):
        name = db.query(Topic.name).filter(Topic.id == topic_id).first()
        return name[0]

    def get_result(self, db, user_id):
        result = db.query(Result).filter(Result.user_id == user_id).first()
        result = ResultBase(
            round=result.round, topic_number=result.topic_number, choice=result.choice
        )
        return result

    def update_selection(self, db, status, user_id, topic_id, choice):
        topic = db.query(Topic).filter(Topic.id == topic_id).first()
        student = db.query(Student).filter(Student.user_id == user_id).first()
        if topic.grade != student.grade:
            raise HTTPException(status_code=400, detail="grade not match")
        elif topic.major != student.major:
            raise HTTPException(status_code=400, detail="major not match")

        result = (
            db.query(Selection)
            .filter(Selection.user_id == user_id)
            .filter(Selection.round == status)
            .first()
        )
        if not result:
            raise HTTPException(status_code=404, detail="Selection not found")

        result = self.change_choice(db, choice, result, topic_id)
        db.commit()
        return result

    def change_choice(self, db, choice, result, topic_id):
        if choice == 1:
            result.choice1_id = topic_id
            result.choice1_number = self.get_topic_name(db, topic_id)
        elif choice == 2:
            result.choice2_id = topic_id
            result.choice2_number = self.get_topic_name(db, topic_id)
        elif choice == 3:
            result.choice3_id = topic_id
            result.choice3_number = self.get_topic_name(db, topic_id)
        elif choice == 4:
            result.choice4_id = topic_id
            result.choice4_number = self.get_topic_name(db, topic_id)
        return result


crud_student = CRUDStudent(Student)
