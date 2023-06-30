from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from models import User as ModelsUser
from core.security import get_password_hash, verify_password
from typing import Any, Optional


class CRUDUser:
    def __init__(self, model) -> None:
        self.model = model

    def get_by_user_id(self, db: Session, user_id: Any):
        return db.query(self.model).filter(self.model.user_id == user_id).first()

    # def get_all(self, db: Session):
    #     return db.query(self.model).all()

    # def remove(self, db: Session, id: Any):
    #     obj = db.query(self.model).get(id)
    #     db.delete(obj)
    #     db.commit()
    #     return obj

    # def get_by_email(self, db: Session, email: str):
    #     return db.query(self.model).filter(self.model.email == email).first()

    # def create(self, db: Session, user_params):
    #     user = ModelsUser(
    #         name=user_params.name,
    #         email=user_params.email,
    #         hashed_password=get_password_hash(user_params.password),
    #     )
    #     db.add(user)
    #     db.commit()
    #     db.refresh(user)
    #     return user

    def authenticate(self, db: Session, user_id, password):  # 验证用户信息
        user = self.get_by_user_id(db, user_id=user_id)  # 通过数据库查询用户信息
        if not user:
            return None
        if not verify_password(password, user.user_pwd):  # 验证密码
            return None
        return user

    # def update_name(self, db: Session, id, user_params):
    #     user = self.get_by_id(db=db, id=id)
    #     user.name = user_params.name
    #     db.commit()
    #     db.refresh(user)
    #     return user

    # def update_password(self, db: Session, id, user_params):
    #     user = self.get_by_id(db=db, id=id)
    #     user.hashed_password = get_password_hash(user_params.password)
    #     db.commit()
    #     db.refresh(user)
    #     return user


crud_user = CRUDUser(ModelsUser)
