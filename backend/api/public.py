from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api import deps
from api.deps import get_db
from schemas.public import Password
from crud import crud_public

# from models.status import Status
from schemas.public import PublicTime

router = APIRouter()


@router.get("/status", response_model=list[PublicTime])
def read_status(db: Session = Depends(deps.get_db)):
    status = crud_public.get_status(db)
    return status


@router.put("/update_pwd")
def update_pwd(
    password: Password,
    db: Session = Depends(get_db),
    current_user=Depends(deps.get_current_user),
):
    crud_public.update_pwd(db=db, password=password.password, user_id=current_user.id)
