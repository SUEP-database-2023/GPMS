from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()


@router.get("/teachers")
async def teachers_test():
    return {"message": "teachers_test"}
