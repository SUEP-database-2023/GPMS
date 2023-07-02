from fastapi import APIRouter, Depends
from api import deps
from schemas.user import UserRole
from schemas.teacher import TeacherSelected
from schemas.topic import TopicCreate
from crud import crud_teacher
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/teacher/selected", response_model=list[TeacherSelected])
def teachers_selected(
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    if deps.check_permission(current_user.role, UserRole.TEACHER):
        data = crud_teacher.get_teacher_selected(db=db, user_id=current_user.id)
        return data


@router.post("/teacher/topic_info")
def teacher_add_topic(
    topic_params: TopicCreate,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_user),
):
    if deps.check_permission(current_user.role, UserRole.TEACHER):
        crud_teacher.create_topic(
            db=db, topic_params=topic_params, user_id=current_user.id
        )
