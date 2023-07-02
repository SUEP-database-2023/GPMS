from crud.base import CRUDBase
from sqlalchemy.orm import Session
from schemas.teacher import TeacherCreate
from models import User, Teacher
from fastapi.encoders import jsonable_encoder
from core.security import get_password_hash


class CRUDAdmin(CRUDBase):
    def create_teacher(self, db: Session, teacher_params: TeacherCreate):
        teacher_data = jsonable_encoder(teacher_params)
        password = get_password_hash(teacher_data["number"])
        user = self.model(
            number=teacher_data["number"],
            password=password,
            role=1,
        )
        db.add(user)
        db.commit()
        db.refresh(user)

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


crud_admin = CRUDAdmin(User)
