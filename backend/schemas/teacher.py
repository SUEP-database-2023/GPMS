from datetime import datetime
from pydantic import BaseModel


class Teacher_selected(BaseModel):
    topic_id: str
    topic_name: str
    student_id: int  # student表的自增ID
    student_num: str
    student_name: str
