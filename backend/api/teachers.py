from fastapi import APIRouter, Depends
from api import deps
from schemas.user import UserRole
from schemas.teacher import Teacher_selected
from crud import crud_teacher
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/teacher/selected/{user_id}", response_model=list[Teacher_selected])
def teachers_test(
    user_id: str,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    if deps.check_permission(current_user.role, UserRole.TEACHER):
        data = crud_teacher.get_teacher_selected(db=db, user_id=user_id)
        return data
