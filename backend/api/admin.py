from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api import deps
from schemas.user import UserRole
from schemas.teacher import TeacherCreate, TeacherUpdate
from schemas.student import StudentCreate
from schemas.public import PublicTime
from schemas.topic import TopicRequest, TopicAudit
from crud import crud_admin
from models import Topic
from datetime import datetime

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


# 获取所有课题
@router.get("/topics", response_model=list[TopicRequest])
def get_all_topics(
    current_user=Depends(deps.get_current_user), db: Session = Depends(deps.get_db)
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        topics = crud_admin.get_all_topics(db)
    return topics


# 审核题目是否通过
@router.put("/update/audit_topic/{topic_id}", response_model=list[TopicAudit])
def audit_topic(
    topic_id: int,
    topic_params: TopicAudit,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        topics = crud_admin.audit_topic(
            db=db, topic_params=topic_params, topic_id=topic_id, user_id=current_user.id
        )
    return topics


# 更新选题截止时间
@router.put("/update/end_time/{status_id}")
def update_end_time(
    status_id: int,
    status_params: PublicTime,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        status = crud_admin.update_end_time(
            db=db,
            status_params=status_params,
            status_id=status_id,
        )
    return status
