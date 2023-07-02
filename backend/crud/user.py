from sqlalchemy.orm import Session

from models import User as ModelsUser
from core.security import verify_password
from typing import Any


class CRUDUser:
    def __init__(self, model) -> None:
        self.model = model

    def get_by_id(self, db: Session, id: int):
        return db.query(self.model).filter(self.model.id == id).first()

    def get_by_number(self, db: Session, number: Any):
        return db.query(self.model).filter(self.model.number == number).first()

    def authenticate(self, db: Session, number, password):  # 验证用户信息
        user = self.get_by_number(db, number=number)  # 通过数据库查询用户信息
        if not user:
            return None
        if not verify_password(password, user.user_pwd):  # 验证密码
            return None
        return user


crud_user = CRUDUser(ModelsUser)
