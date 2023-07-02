from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api import deps
from api.deps import get_db
from crud.public import crud_public
# from models.status import Status
from schemas.public import PublicTime

router = APIRouter()


@router.get("/status", response_model=list[PublicTime])
def read_status(db: Session = Depends(deps.get_db)):
    status = crud_public.get_status(db)
    return status

