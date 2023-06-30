from sqlalchemy import Column, Integer, String, DateTime
from db.config import Base


class Selection(Base):
    __tablename__ = "selection"

    id = Column(Integer, primary_key=True, autoincrement=True, comment="主键id")
    number = Column(String(10), index=True, comment="学生学号")
    choice1 = Column(String(9), nullable=False, comment="第一志愿id")
    choice2 = Column(String(9), nullable=False, comment="第二志愿id")
    choice3 = Column(String(9), nullable=False, comment="第三志愿id")
    choice4 = Column(String(9), nullable=False, comment="第四志愿id")
    time = Column(DateTime, nullable=False, comment="选题时间")
    round = Column(Integer, nullable=False, comment="第几轮选题")
