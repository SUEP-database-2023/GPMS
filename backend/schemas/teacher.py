from pydantic import BaseModel
from schemas.user import UserBase
from schemas.topic import TopicBase
from schemas.student import StudentBase


class TeacherBase(UserBase):
    teacher_name: str
    major: str


class TeacherInDB(TeacherBase):
    level: int
    origin: str


class TeacherSelected(TopicBase, StudentBase):
    pass
