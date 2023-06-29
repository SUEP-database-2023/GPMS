from sqlalchemy import Column, Integer, String, Boolean, DateTime
from db.config import Base

class Topic(Base):
    __tablename__ = 'topic'

    id = Column(Integer, primary_key=True, autoincrement=True)
    topic_id = Column(String(9), index=True, comment="课题编号")
    topic_name = Column(String(30), nullable=False, comment="课题名称")
    topic_whether_background = Column(Boolean, default=False, nullable=False, comment="是否有项目背景")
    topic_havebg_id = Column(String(20), nullable=True, comment="有项目背景的项目编号")
    topic_havebg_else = Column(String(100), nullable=True, comment="有项目背景的其他补充")
    topic_category = Column(String(10), nullable=False, comment="课题性质（类别）")
    topic_synopsis = Column(String(5000), nullable=False, comment="课题简介")
    topic_remark = Column(String(200), nullable=True, comment="备注")
    topic_teacher = Column(String(10), nullable=False, comment="指导教师")
    topic_whether_pass = Column(Boolean, default=False, nullable=False, comment="是否审核通过")
    topic_major = Column(String(10), nullable=False, comment="课题适用专业")
    topic_time = Column(DateTime, nullable=False, comment="课题提交时间")
