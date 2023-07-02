from crud.base import CRUDBase
from sqlalchemy.orm import Session
from fastapi import HTTPException
from models import Status
from schemas.public import PublicTime


class CRUDPublic(CRUDBase):
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


crud_public = CRUDPublic(Status)
