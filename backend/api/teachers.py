from fastapi import APIRouter, Depends, HTTPException
from api import deps

router = APIRouter()


@router.get("/teachers")
async def teachers_test(current_user=Depends(deps.get_current_user)):
    return {"message": "teachers_test"}
