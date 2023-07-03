from sqlalchemy import Column, Integer, String
from db.config import Base


class Result(Base):
    __tablename__ = "result"

    id = Column(Integer, primary_key=True, autoincrement=True, comment="主键id")
    user_id = Column(Integer, index=True, comment="学生user_id")
    student_number = Column(String(10), index=True, comment="学生学号")
    topic_id = Column(Integer, nullable=True, comment="课题id")
    topic_number = Column(String(9), nullable=True, comment="课题编号")
    round = Column(Integer, nullable=True, comment="选中轮次")
    choice = Column(Integer, nullable=True, comment="选中志愿")
    grade = Column(String(10), comment="年级")
