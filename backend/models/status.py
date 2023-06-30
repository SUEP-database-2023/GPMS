from sqlalchemy import Column, Integer, DateTime, String
from db.config import Base


class Status(Base):
    __tablename__ = "status"

    id = Column(Integer, primary_key=True, autoincrement=True)
    teacher_post_time = Column(
        DateTime, nullable=False, comment="教师提交题目截止时间/管理员审核题目开始时间"
    )
    admin_audit_time = Column(
        DateTime, nullable=False, comment="管理员审核题目截止时间/学生浏览题目开始时间"
    )
    student_begin_time1 = Column(
        DateTime, nullable=False, comment="学生第一次选题开始时间/学生浏览题目结束时间"
    )
    student_end_time1 = Column(
        DateTime, nullable=False, comment="学生第一次选题截止时间/管理员第一次匹配开始时间"
    )
    admin_end_time1 = Column(
        DateTime, nullable=False, comment="管理员第一次匹配截止时间/学生第二次选题开始时间"
    )
    student_end_time2 = Column(
        DateTime, nullable=False, comment="学生第二次选题截止时间/管理员第二次匹配开始时间"
    )
    admin_end_time2 = Column(DateTime, nullable=False, comment="管理员第二次匹配截止时间")
    post_time = Column(DateTime, nullable=False, comment="当前提交时间")
    status_major = Column(String(10), nullable=False, comment="设置适用专业")
