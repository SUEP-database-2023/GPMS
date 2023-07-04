from sqlalchemy import Column, Integer, String, DateTime
from db.config import Base


class Selection(Base):
    __tablename__ = "selection"

    id = Column(Integer, primary_key=True, autoincrement=True, comment="主键id")
    user_id = Column(Integer, index=True, comment="学生user_id")
    student_number = Column(String(10), index=True, comment="学生学号")
    choice1_number = Column(String(9), nullable=False, comment="第一志愿课题编号")
    choice1_id = Column(Integer, nullable=False, comment="第一志愿课程id")
    choice2_number = Column(String(9), nullable=False, comment="第二志愿课题编号")
    choice2_id = Column(Integer, nullable=False, comment="第二志愿课程id")
    choice3_number = Column(String(9), nullable=False, comment="第三志愿课题编号")
    choice3_id = Column(Integer, nullable=False, comment="第三志愿课程id")
    choice4_number = Column(String(9), nullable=False, comment="第四志愿课题编号")
    choice4_id = Column(Integer, nullable=False, comment="第四志愿课程id")
    time = Column(DateTime, nullable=False, comment="选题时间")
    round = Column(Integer, nullable=False, comment="第几轮选题")
    grade = Column(String(10), nullable=False, comment="年级")
    random = Column(Integer, nullable=False, comment="随机数")
