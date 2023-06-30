from sqlalchemy.orm import Session

from models import Status
from schemas import PublicTime


def get_status(db: Session, status_id: int) -> Status:
    return db.query(Status).get(status_id)


def update_status(db: Session, status: Status, public_time: PublicTime) -> Status:
    for field, value in public_time.dict(exclude_unset=True).items():
        setattr(status, field, value)
    db.commit()
    db.refresh(status)
    return status
