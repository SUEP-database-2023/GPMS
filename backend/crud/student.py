from crud.base import CRUDBase
from fastapi.encoders import jsonable_encoder
from models import Topic, Selection, Student
from fastapi import HTTPException

# from schemas.selection import selectionBase


class CRUDStudent(CRUDBase):
    def create_selection(self, db, status, selection_params, user_id):
        selection_data = jsonable_encoder(selection_params)
        student_number = (
            db.query(Student.number).filter(Student.user_id == user_id).first()[0]
        )

        def get_choice_number(topic_id):
            choice_number = (
                db.query(Topic.number).filter(Topic.id == topic_id).first()[0]
            )
            if not choice_number:
                raise HTTPException(status_code=400, detail="no topic found")
            else:
                return choice_number

        selection = Selection(
            user_id=user_id,
            student_number=student_number,
            choice1_number=get_choice_number(selection_data["choice1_id"]),
            choice1_id=selection_data["choice1_id"],
            choice2_number=get_choice_number(selection_data["choice2_id"]),
            choice2_id=selection_data["choice2_id"],
            choice3_number=get_choice_number(selection_data["choice3_id"]),
            choice3_id=selection_data["choice3_id"],
            choice4_number=get_choice_number(selection_data["choice4_id"]),
            choice4_id=selection_data["choice4_id"],
            time=selection_data["time"],
            round=status,
        )
        existing_selection = (
            db.query(Selection).filter(Selection.user_id == user_id).first()
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


crud_student = CRUDStudent(Student)
