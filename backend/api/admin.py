from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()


@router.get("/admin")
async def admin_test():
    return {"message": "admin_test"}
