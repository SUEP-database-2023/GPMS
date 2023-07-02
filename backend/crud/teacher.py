from crud.base import CRUDBase
from sqlalchemy.orm import Session
from typing import Any
from models import Teacher, Topic, Student, Result
from schemas.topic import TopicCreate
from fastapi.encoders import jsonable_encoder
from fastapi import HTTPException
from sqlalchemy import func


class CRUDTeacher(CRUDBase):
    def get_teacher_selected(self, db: Session, user_id: Any):
        return (
            db.query(
                Topic.id,
                Topic.name,
                Student.user_id,
                Student.name,
            )
            .join(self.model, self.model.name == Topic.teacher_name)
            .join(Result, Result.topic_id == Topic.id)
            .join(Student, Student.user_id == Result.user_id)
            .filter(self.model.id == user_id)
            .all()
        )

    def create_topic(self, db: Session, topic_params: TopicCreate, user_id: Any):
        topic_data = jsonable_encoder(topic_params)
        teacher = db.query(Teacher).filter(Teacher.user_id == user_id).first()
        number = self.create_number(db, teacher.major, topic_data["grade"])
        topic = Topic(
            **topic_data,
            teacher_name=teacher.name,
            user_id=user_id,
            number=number,
            major=teacher.major,
        )
        db.add(topic)
        db.commit()
        db.refresh(topic)

    def create_number(self, db: Session, major: str, grade: str):
        max_id = db.query(func.max(Topic.id)).scalar()
        if max_id is None:
            max_id = 0
        max_id += 1
        if max_id < 10:
            id = "00" + str(max_id)
        elif max_id < 100:
            id = "0" + str(max_id)
        else:
            id = max_id

        if major == "应物":
            number = grade + "WL" + id
        else:
            number = grade + "XJ" + id
        return number


crud_teacher = CRUDTeacher(Teacher)
