from datetime import datetime
from pydantic import BaseModel


class PublicTime(BaseModel):
    teacher_post_time: datetime
    admin_audit_time: datetime
    student_begin_time1: datetime
    student_end_time1: datetime
    admin_end_time1: datetime
    student_end_time2: datetime
    admin_end_time2: datetime
    major: str


class Password(BaseModel):
    password: str
