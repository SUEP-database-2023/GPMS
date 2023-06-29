from sqlalchemy import Column, Integer, String, DateTime
from db.config import Base

class Selection(Base):
    __tablename__ = 'selection'

    id = Column(Integer, primary_key=True, autoincrement=True)
    student_id = Column(String(10), index=True, comment="学生编号")
    topic1_id = Column(String(9), nullable=False, comment="第一志愿id")
    topic2_id = Column(String(9), nullable=False, comment="第二志愿id")
    topic3_id = Column(String(9), nullable=False, comment="第三志愿id")
    topic4_id = Column(String(9), nullable=False, comment="第四志愿id")
    select_time = Column(DateTime, nullable=False, comment="选题时间")
    select_status = Column(Integer, nullable=False, comment="第几轮选题")
