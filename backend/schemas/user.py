from datetime import datetime
from pydantic import BaseModel, EmailStr
from enum import IntEnum


class UserBase(BaseModel):
    number: str  # 学号/工号


class UserCreate(UserBase):
    password: str
    role: int


class UserInDB(UserCreate):
    id: int


# 定义用户角色
class UserRole(IntEnum):
    ADMIN = 0
    TEACHER = 1
    STUDENT = 2

class UserPassword(BaseModel):
    passowrd: str