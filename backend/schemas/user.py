from datetime import datetime
from pydantic import BaseModel, EmailStr
from enum import IntEnum


class UserBase(BaseModel):
    user_id: str  # 用户ID
    number: str  # 学号/工号


class UserCreate(UserBase):
    password: str
    role: int


class UserInDB(UserBase):
    password: str
    role: int


# 定义用户角色
class UserRole(IntEnum):
    ADMIN = 0
    TEACHER = 1
    STUDENT = 2
