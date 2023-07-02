from crud.base import CRUDBase
from sqlalchemy.orm import Session
from schemas.teacher import TeacherCreate
from schemas.student import StudentCreate
from models import User, Teacher, Student
from fastapi.encoders import jsonable_encoder
from core.security import get_password_hash
from fastapi import HTTPException
from sqlalchemy.exc import SQLAlchemyError


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


crud_admin = CRUDAdmin(User)
