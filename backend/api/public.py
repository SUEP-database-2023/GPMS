from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()


@router.get("/public")
async def public_test():
    return {"message": "public_test"}
