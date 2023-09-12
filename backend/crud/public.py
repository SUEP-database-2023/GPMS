from crud.base import CRUDBase
from sqlalchemy.orm import Session
from fastapi import HTTPException
from models import Status, User, Rounds
from schemas.public import PublicTime
from core.security import get_password_hash


class CRUDPublic(CRUDBase):
    def get_round(self, db: Session):
        round = db.query(Rounds).filter(Rounds.id == 1).first()
        return round.round

    def get_status(
        self,
        db: Session,
    ):
        status = db.query(Status).all()
        status = [
            PublicTime(
                major=status.major,
                admin_audit_time=status.admin_audit_time,
                admin_end_time1=status.admin_end_time1,
                admin_end_time2=status.admin_end_time2,
                student_begin_time1=status.student_begin_time1,
                student_end_time1=status.student_end_time1,
                student_end_time2=status.student_end_time2,
                teacher_post_time=status.teacher_post_time,
            )
            for status in status
        ]
        if not status:
            raise HTTPException(status_code=404, detail="Status not found")
        return status

    def update_pwd(self, db: Session, password: str, user_id: int):
        pwd = db.query(User).filter(User.id == user_id).first()
        pwd.password = get_password_hash(password)
        db.commit()


crud_public = CRUDPublic(Status)
