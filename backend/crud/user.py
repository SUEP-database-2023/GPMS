from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from models import User as ModelsUser
from core.security import get_password_hash, verify_password
from typing import Any, Optional


class CRUDUser:
    def __init__(self, model) -> None:
        self.model = model

    def get_by_user_id(self, db: Session, user_id: Any):
        return db.query(self.model).filter(self.model.user_num == user_id).first()

    def authenticate(self, db: Session, user_id, password):  # 验证用户信息
        user = self.get_by_user_id(db, user_id=user_id)  # 通过数据库查询用户信息
        if not user:
            return None
        if not verify_password(password, user.user_pwd):  # 验证密码
            return None
        return user


crud_user = CRUDUser(ModelsUser)
