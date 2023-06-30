from fastapi import APIRouter, Depends, HTTPException
from api import deps
from schemas.user import UserRole

router = APIRouter()


@router.get("/admin")
async def admin_test(current_user=Depends(deps.get_current_user)):
    if deps.check_permission(current_user.user_role, UserRole.ADMIN):
        return {"message": "admin_test"}
