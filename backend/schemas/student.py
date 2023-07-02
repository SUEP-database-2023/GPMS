from pydantic import BaseModel
from schemas.user import UserBase


class StudentBase(BaseModel):
    student_name: str


class StudentInDB(StudentBase):
    major: str
    grade: str
    team: str
    phone: str


class StudentCreate(StudentInDB, UserBase):
    pass
