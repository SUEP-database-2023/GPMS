from fastapi import APIRouter, Depends, HTTPException
from api import deps
from schemas.user import UserRole

router = APIRouter()


@router.get("/teachers")
def teachers_test(current_user=Depends(deps.get_current_user)):
    if deps.check_permission(current_user.user_role, UserRole.TEACHER):
        return {"message": "teachers_test"}


@router.get("/teachers/{teacher_id}")
def teachers_test2(teacher_id: str, current_user=Depends(deps.get_current_user)):
    if deps.check_permission(current_user.user_role, UserRole.TEACHER):
        return {"message": teacher_id}
