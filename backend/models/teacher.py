from sqlalchemy import Column, Integer, String, Boolean
from db.config import Base


class Teacher(Base):
    __tablename__ = "teachers"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(String(10), index=True, comment="教师工号")
    teacher_name = Column(String(10), nullable=False, comment="教师姓名")
    teacher_major = Column(String(10), nullable=False, comment="教师专业")
    teacher_level = Column(String(10), nullable=False, comment="教师职称")
    teacher_origin = Column(Boolean, default=False, nullable=False, comment="教师是否来自校外")
