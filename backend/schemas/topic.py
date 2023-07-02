from pydantic import BaseModel


class TopicBase(BaseModel):
    topic_id: str
    topic_name: str
