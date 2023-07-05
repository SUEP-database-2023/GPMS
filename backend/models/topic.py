from sqlalchemy import Column, Integer, String, Boolean, DateTime
from db.config import Base


class Topic(Base):
    __tablename__ = "topic"

    id = Column(Integer, primary_key=True, autoincrement=True, comment="主键id")
    number = Column(String(9), index=True, comment="课题编号")
    name = Column(String(30), nullable=False, comment="课题名称")
    whether_background = Column(
        Boolean, default=False, nullable=False, comment="是否有项目背景"
    )
    have_bg_id = Column(String(20), nullable=True, comment="有项目背景的项目编号")
    have_bg_else = Column(String(100), nullable=True, comment="有项目背景的其他补充")
    category = Column(String(10), nullable=False, comment="课题性质（类别）")
    synopsis = Column(String(5000), nullable=False, comment="课题简介")
    remark = Column(String(200), nullable=True, comment="备注")
    user_id = Column(Integer, nullable=False, comment="教师user_id")
    teacher_name = Column(String(10), nullable=False, comment="指导教师")
    whether_pass = Column(Boolean, default=False, nullable=False, comment="是否审核通过")
    major = Column(String(10), nullable=False, comment="课题适用专业")
    post_time = Column(DateTime, nullable=False, comment="课题提交时间")
    grade = Column(String(10), nullable=True, comment="课题适用年级")
