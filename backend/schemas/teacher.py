from pydantic import BaseModel


class Teacher_selected(BaseModel):
    topic_id: str
    topic_name: str
    user_id: int  # student表的自增ID
    student_name: str

    class Config:
        orm_mode = True
