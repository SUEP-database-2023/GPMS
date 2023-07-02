from fastapi import APIRouter, Depends
from api import deps
from schemas.user import UserRole
from schemas.teacher import TeacherCreate
from crud import crud_admin

router = APIRouter()


@router.get("/admin")
def admin_test(current_user=Depends(deps.get_current_user)):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        return {"message": "admin_test"}


@router.post("/admin/add/teacher")
def admin_add_teacher(
    teacher_params: TeacherCreate,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        crud_admin.create_teacher(db=db, teacher_params=teacher_params)
