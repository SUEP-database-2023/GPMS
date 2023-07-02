from pydantic import BaseModel


class ResultBase(BaseModel):
    topic_number: str
    round: int
    choice: int
