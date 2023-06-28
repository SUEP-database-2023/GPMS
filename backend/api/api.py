from fastapi import APIRouter
from api.admin import router as admin_router
from api.auth import router as auth_router
from api.students import router as students_router
from api.teachers import router as teachers_router
from api.public import router as public_router

api_router = APIRouter()
api_router.include_router(admin_router, prefix="/admin", tags=["admin"])
api_router.include_router(auth_router, prefix="/auth", tags=["auth"])
api_router.include_router(students_router, prefix="/students", tags=["students"])
api_router.include_router(teachers_router, prefix="/teachers", tags=["teachers"])
api_router.include_router(public_router, prefix="/public", tags=["public"])
