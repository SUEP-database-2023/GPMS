from pydantic import BaseModel


class StudentBase(BaseModel):
    student_id: str
    student_name: str
