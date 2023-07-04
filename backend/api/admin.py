from fastapi import APIRouter, Depends
from api import deps
from schemas.user import UserRole
from schemas.teacher import TeacherCreate
from schemas.student import StudentCreate
from crud import crud_admin

router = APIRouter()


@router.post("/add/teacher")
def admin_add_teacher(
    teacher_params: TeacherCreate,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        crud_admin.create_teacher(db=db, teacher_params=teacher_params)


@router.post("/add/teachers")
def admin_add_teachers(
    teachers_params: list[TeacherCreate],
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        crud_admin.create_teachers(db=db, teacher_params=teachers_params)


@router.post("/add/student")
def admin_add_student(
    student_params: StudentCreate,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        crud_admin.create_student(db=db, student_params=student_params)


@router.post("/add/students")
def admin_add_students(
    student_params: list[StudentCreate],
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        crud_admin.create_students(db=db, student_params=student_params)


@router.get("/start_matching/{grade}/{round}")
def admin_start_matching(
    grade: int,
    round: int,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        crud_admin.start_matching(round=round, db=db, grade=grade)


@router.put("/force_assign_topics/{student_number}/{topic_number}")
def force_assign_topics(
    student_number: str,
    topic_number: str,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        crud_admin.force_assign_topics(
            db=db, student_number=student_number, topic_number=topic_number
        )
