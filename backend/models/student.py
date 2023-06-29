from sqlalchemy import Column, Integer, String
from db.config import Base

class Student(Base):
    __tablename__ = 'students'

    id = Column(Integer, primary_key=True, autoincrement=True)
    student_id = Column(String(10), index=True, comment="学生学号")
    student_name = Column(String(10), nullable=False, comment="学生姓名")
    student_major = Column(String(10), nullable=False, comment="学生专业")
    student_grade = Column(String(4), nullable=False, comment="年级")
    student_class = Column(String(10), nullable=False, comment="班级")
    student_phone = Column(String(11), nullable=False, comment="电话号码")
    student_random = Column(Integer, nullable=False, comment="随机数")
