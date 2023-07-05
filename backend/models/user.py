from sqlalchemy import Column, Integer, String
from db.config import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True, comment="主键id")
    number = Column(String(10), index=True, comment="用户id")
    password = Column(String(200), nullable=False, comment="用户密码")
    role = Column(Integer, nullable=False, comment="用户权限")
