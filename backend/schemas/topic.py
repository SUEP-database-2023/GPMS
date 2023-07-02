from pydantic import BaseModel
from datetime import datetime


class TopicBase(BaseModel):
    name: str
    number: str


class TopicCreate(TopicBase):
    whether_background: bool
    have_bg_id: str
    have_bg_else: str
    category: str
    synopsis: str
    remark: str
    major: str
    post_time: datetime
