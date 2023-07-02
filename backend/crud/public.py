from crud.base import CRUDBase
from sqlalchemy.orm import Session
from fastapi import HTTPException
from models import Status


class CRUDPublic(CRUDBase):
    def get_status(
        self,
        db: Session,
    ):
        status = db.query(Status).all()
        if not status:
            raise HTTPException(status_code=404, detail="Status not found")
        return status


crud_public = CRUDPublic(Status)
