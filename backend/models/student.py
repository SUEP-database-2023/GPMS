from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.config import Base
from .user import User

class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, autoincrement=True, comment="主键id")
    user_id = Column(Integer, ForeignKey("users.id"), index=True, comment="users外键id")
    number = Column(String(8), index=True, comment="学生学号")
    name = Column(String(10), nullable=False, comment="学生姓名")
    major = Column(String(10), nullable=False, comment="学生专业")
    grade = Column(String(4), nullable=False, comment="年级")
    team = Column(String(10), nullable=False, comment="班级")
    phone = Column(String(11), nullable=False, comment="电话号码")
    random = Column(Integer, nullable=False, comment="随机数")

    user = relationship("User", back_populates="student")
