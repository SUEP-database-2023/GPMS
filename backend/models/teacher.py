from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from db.config import Base


class Teacher(Base):
    __tablename__ = "teachers"

    id = Column(Integer, primary_key=True, autoincrement=True, comment="主键id")
    user_id = Column(Integer, ForeignKey("users.id"), index=True, comment="users外键id")
    number = Column(String(10), comment="教师工号")
    name = Column(String(10), nullable=False, comment="教师姓名")
    major = Column(String(10), nullable=False, comment="教师专业")
    level = Column(String(10), nullable=False, comment="教师职称")
    origin = Column(Boolean, default=False, nullable=False, comment="教师是否来自校外")
