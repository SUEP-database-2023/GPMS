from crud.base import CRUDBase
from sqlalchemy.orm import Session
from typing import Any
from models import Teacher, Topic, Student, Result


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


crud_teacher = CRUDTeacher(Teacher)
