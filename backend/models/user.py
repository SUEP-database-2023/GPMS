from sqlalchemy import Column, Integer, String
from db.config import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(String(10), index=True, comment="用户id")
    user_pwd = Column(String(25), nullable=False, comment="用户密码")
    user_root = Column(Integer, nullable=False, comment="用户权限")
