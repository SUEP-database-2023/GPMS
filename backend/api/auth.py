from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()


@router.get("/auth")
async def auth_test():
    return {"message": "auth_test"}
