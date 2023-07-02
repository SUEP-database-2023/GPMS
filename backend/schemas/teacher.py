from pydantic import BaseModel
from schemas.user import UserBase
from schemas.topic import TopicBase
from schemas.student import StudentBase


class TeacherBase(UserBase):
    teacher_name: str
    major: str


class TeacherCreate(TeacherBase):
    level: str
    origin: int


class TeacherInDB(TeacherCreate):
    level: str
    origin: int


class TeacherSelected(TopicBase, StudentBase):
    pass
