from crud.base import CRUDBase
from sqlalchemy.orm import Session
from schemas.teacher import TeacherCreate
from schemas.student import StudentCreate
from models import User, Teacher, Student
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

    def create_student(self, db: Session, student_params: StudentCreate):
        student_data = jsonable_encoder(student_params)
        password = get_password_hash(student_data["number"])
        user = self.model(
            number=student_data["number"],
            password=password,
            role=2,
        )
        db.add(user)
        db.commit()
        db.refresh(user)

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


crud_admin = CRUDAdmin(User)
