from fastapi import APIRouter, Depends, HTTPException
from api import deps
from schemas.user import UserRole
from schemas.selection import selectionBase, StudentGetSelection
from schemas.topic import StudentGetTopic, StudentGetTopicDetail
from schemas.result import ResultBase
from crud import crud_student

router = APIRouter()


@router.post("/topic/{status}")
def student_add_selection(
    status: int,
    selection_params: selectionBase,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.STUDENT):
        crud_student.create_selection(
            db=db,
            status=status,
            selection_params=selection_params,
            user_id=current_user.id,
        )


@router.get("/topic", response_model=list[StudentGetTopic])
def student_get_topic(
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.STUDENT):
        return crud_student.get_topic(
            db=db,
        )


@router.get("/topic/{topic_id}", response_model=StudentGetTopicDetail)
def student_get_topic_detail(
    topic_id: int,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.STUDENT):
        return crud_student.get_topic_detail(db=db, topic_id=topic_id)


@router.get("/selection/{select_status}", response_model=StudentGetSelection)
def student_get_selection(
    select_status: int,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.STUDENT):
        return crud_student.get_selection(
            db=db,
            user_id=current_user.id,
            select_status=select_status,
        )


@router.get("/result", response_model=ResultBase)
def student_get_result(
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.STUDENT):
        return crud_student.get_result(
            db=db,
            user_id=current_user.id,
        )


@router.put("/topic/{status}/{choice}/{topic_id}")
def student_update_selection(
    status: int,
    choice: int,
    topic_id: int,
    current_user=Depends(deps.get_current_user),
    db=Depends(deps.get_db),
):
    if deps.check_permission(current_user.role, UserRole.STUDENT):
        crud_student.update_selection(
            db=db,
            status=status,
            choice=choice,
            topic_id=topic_id,
            user_id=current_user.id,
        )
