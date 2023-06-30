from datetime import datetime
from pydantic import BaseModel, EmailStr


class UserBase(BaseModel):
    user_id: str


class UserCreate(UserBase):
    password: str


class UserInDB(UserBase):
    hashed_password: str
    user_role: int

    class Config:
        orm_mode = True
