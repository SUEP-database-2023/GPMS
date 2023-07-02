from pydantic import BaseModel
from datetime import datetime


class TopicBase(BaseModel):
    name: str


class TopicCreate(TopicBase):
    whether_background: bool
    have_bg_id: str
    have_bg_else: str
    category: str
    synopsis: str
    remark: str
    post_time: datetime
    grade: str


class TopicChange(TopicCreate):
    pass


class StudentGetTopic(TopicBase):
    id: int


class StudentGetTopicDetail(TopicBase):
    synopsis: str
    remark: str
