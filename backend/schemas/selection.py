from pydantic import BaseModel
from datetime import datetime


class selectionBase(BaseModel):
    choice1_id: int
    choice2_id: int
    choice3_id: int
    choice4_id: int
    time: datetime


class StudentGetSelection(selectionBase):
    choice1_number: str
    choice2_number: str
    choice3_number: str
    choice4_number: str
    choice1_name: str
    choice2_name: str
    choice3_name: str
    choice4_name: str
