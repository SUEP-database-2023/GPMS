from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()


@router.get("/students")
async def students_test():
    return {"message": "students_test"}
