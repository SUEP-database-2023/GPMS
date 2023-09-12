from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api import deps
from schemas.user import UserRole, ResetPassword
from schemas.round import RoundBase
from schemas.teacher import TeacherCreate, TeacherInDB
from schemas.student import StudentCreate, StudentInDB
from schemas.public import PublicTime
from schemas.topic import TopicRequest, TopicAudit, TopicForce
from crud import crud_admin
from models import Topic
from datetime import datetime

router = APIRouter()


@router.get("/start_matching/{grade}/{round}")
def admin_start_matching(
    grade: int,
    round: int,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        crud_admin.start_matching(round=round, db=db, grade=grade)


# 获取所有课题
@router.get("/topics", response_model=list[TopicRequest])
def get_all_topics(
    current_user=Depends(deps.get_current_user), db: Session = Depends(deps.get_db)
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        topics = crud_admin.get_all_topics(db)
    return topics


@router.get("/get/allresult")
def get_all_result(
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        result = crud_admin.get_all_result(
            db=db,
        )
    return result


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


@router.put("/force_assign_topics")
def force_assign_topics(
    topic_params: TopicForce,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        crud_admin.force_assign_topics(
            db=db,
            student_number=topic_params.student_number,
            topic_number=topic_params.topic_number,
        )


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


# 更新选题轮次
@router.put("/update/round/")
def update_round(
    round_params: RoundBase,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        round = crud_admin.update_round(
            db=db,
            round_params=round_params,
        )
    return round


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


# 更新学生信息
@router.put("/update/student/{student_id}")
def update_student_info(
    student_id: int,
    student_params: StudentInDB,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        student = crud_admin.update_student_info(
            db=db,
            student_params=student_params,
            student_id=student_id,
        )
    return student


# 更新老师信息
@router.put("/update/teacher/{teacher_id}")
def update_teacher_info(
    teacher_id: int,
    teacher_params: TeacherInDB,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        teacher = crud_admin.update_teacher_info(
            db=db,
            teacher_params=teacher_params,
            teacher_id=teacher_id,
        )
    return teacher


# 重置用户账号
@router.put("/update/user/")
def update_user_password(
    user_params: ResetPassword,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    if deps.check_permission(current_user.role, UserRole.ADMIN):
        crud_admin.update_user_password(
            db=db,
            user_number=user_params,
        )
