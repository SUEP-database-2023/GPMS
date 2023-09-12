from pydantic import BaseModel
from datetime import datetime


class TopicRequest(BaseModel):
    number: str
    name: str
    whether_background: bool
    have_bg_id: str
    have_bg_else: str
    category: str
    synopsis: str
    remark: str
    user_id: int
    teacher_name: str
    whether_pass: bool
    major: str
    grade: str


class TopicBase(BaseModel):
    name: str


class TopicAudit(TopicBase):
    is_approved: bool


class TopicCreate(TopicBase):
    whether_background: bool
    have_bg_id: str
    have_bg_else: str
    category: str
    synopsis: str
    remark: str
    grade: str


class TopicChange(TopicCreate):
    pass


class StudentGetTopic(TopicBase):
    id: int
    category :str
    number: str


class StudentGetTopicDetail(TopicBase):
    synopsis: str
    remark: str


class TopicForce(BaseModel):
    student_number: str
    topic_number: str
