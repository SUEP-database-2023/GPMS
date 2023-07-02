from pydantic import BaseModel
from datetime import datetime


class selectionBase(BaseModel):
    choice1_id: int
    choice2_id: int
    choice3_id: int
    choice4_id: int
    time: datetime
