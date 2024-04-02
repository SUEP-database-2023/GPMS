from pydantic import BaseModel


class ResultBase(BaseModel):
    number: str
    teacher_name: str
    name: str


class GetAllResult(BaseModel):
    result_id: int
    student_number: str
    student_name: str
    topic_name: str
    topic_number: str
    teacher_name: str
    grade: str


class GetSelectionsResult(GetAllResult):
    Selected: bool
    round: int
    choice: int
