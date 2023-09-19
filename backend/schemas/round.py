from pydantic import BaseModel
from schemas.user import UserBase


class RoundBase(BaseModel):
    round: int
