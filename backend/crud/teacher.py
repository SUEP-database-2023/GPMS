from crud.base import CRUDBase
from sqlalchemy.orm import Session
from typing import Any
from models import Teacher, Topic, Student, Result


class CRUDTeacher(CRUDBase):
    def get_teacher_selected(self, db: Session, user_id: Any):
        return (
            db.query(
                Topic.topic_id,
                Topic.topic_name,
                Student.id,
                Student.user_id,
                Student.student_name,
            )
            .join(self.model, self.model.teacher_name == Topic.topic_teacher)
            .join(Result, Result.topic_id == Topic.topic_id)
            .join(Student, Student.user_id == Result.user_id)
            .filter(self.model.user_id == user_id)
            .all()
        )


crud_teacher = CRUDTeacher(Teacher)
