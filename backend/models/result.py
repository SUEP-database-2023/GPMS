from sqlalchemy import Column, Integer, String
from db.config import Base


class Result(Base):
    __tablename__ = "result"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(String(10), index=True, comment="学生编号")
    topic_id = Column(String(9), nullable=False, comment="最终选择的课题编号")
    status_1 = Column(Integer, nullable=True, comment="第几轮选题选中")
    status_2 = Column(Integer, nullable=True, comment="选中第几志愿")
