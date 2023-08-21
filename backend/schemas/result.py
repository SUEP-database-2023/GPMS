from pydantic import BaseModel


class ResultBase(BaseModel):
    topic_number: str
    round: int
    choice: int


class GetAllResult(BaseModel):
    result_id: int
    student_number: str
    student_name: str
    topic_name: str
    topic_number: str
    teacher_name: str
    grade: str
