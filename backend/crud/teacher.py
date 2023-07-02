from crud.base import CRUDBase
from sqlalchemy.orm import Session
from typing import Any
from models import Teacher, Topic, Student, Result
from schemas.topic import TopicCreate
from fastapi.encoders import jsonable_encoder
from fastapi import HTTPException


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
        existing_topic = (
            db.query(Topic).filter(Topic.number == topic_data["number"]).first()
        )
        if existing_topic:
            raise HTTPException(
                status_code=400, detail="User already exists with this topic"
            )
        teacher = db.query(Teacher.name).filter(Teacher.user_id == user_id).first()
        topic = Topic(
            **topic_data,
            teacher_name=teacher.name,
            user_id=user_id,
        )
        db.add(topic)
        db.commit()
        db.refresh(topic)


crud_teacher = CRUDTeacher(Teacher)
