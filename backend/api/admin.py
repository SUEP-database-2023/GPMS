from fastapi import APIRouter, Depends
from api import deps
from schemas.user import UserRole

router = APIRouter()


@router.get("/admin")
def admin_test(current_user=Depends(deps.get_current_user)):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        return {"message": "admin_test"}


@router.get("/admin/add/teacher")
def admin_add_teacher(
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
    teacher_params=1,
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        return {"message": "admin_test"}
