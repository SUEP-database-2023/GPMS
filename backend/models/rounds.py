from sqlalchemy import Column, Integer
from db.config import Base


class Rounds(Base):
    __tablename__ = "rounds"

    id = Column(Integer, primary_key=True)
    round = Column(Integer)
