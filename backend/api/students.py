from fastapi import APIRouter, Depends, HTTPException
from api import deps
from schemas.user import UserRole

router = APIRouter()


@router.get("/students")
async def students_test(current_user=Depends(deps.get_current_user)):
    if deps.check_permission(current_user.role, UserRole.STUDENT):
        return {"message": "students_test"}
