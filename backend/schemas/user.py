from datetime import datetime
from pydantic import BaseModel, EmailStr
from enum import IntEnum


class UserBase(BaseModel):
    user_id: str


class UserCreate(UserBase):
    password: str


class UserInDB(UserBase):
    hashed_password: str
    user_role: int

    class Config:
        orm_mode = True


# 定义用户角色
class UserRole(IntEnum):
    ADMIN = 0
    TEACHER = 1
    STUDENT = 2
