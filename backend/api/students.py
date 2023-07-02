from fastapi import APIRouter, Depends, HTTPException
from api import deps
from schemas.user import UserRole
from schemas.selection import selectionBase
from crud import crud_student

router = APIRouter()


@router.post("/student/topic/{status}")
def student_add_selection(
    status: int,
    selection_params: selectionBase,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.STUDENT):
        crud_student.create_selection(
            db=db,
            status=status,
            selection_params=selection_params,
            user_id=current_user.id,
        )
