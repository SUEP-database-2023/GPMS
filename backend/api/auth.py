from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from api import deps
from crud import crud_user
from schemas import token as schemas_token
from core import security

router = APIRouter()


@router.post("/login/access_token", response_model=schemas_token.Token)
def login_access_token(
    db: Session = Depends(deps.get_db),
    form_data: OAuth2PasswordRequestForm = Depends(),
    # 通过OAuth2PasswordRequestForm来解析登录时传过来的表单信息
):
    user = crud_user.authenticate(  # 通过authenticate方法来验证用户信息
        db,
        user_id=form_data.username,
        password=form_data.password,
    )

    if not user:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    access_token = security.create_access_token(  # 用user_id和user_role来创建token
        user.user_num,
        user.user_role,
    )
    return {"access_token": access_token, "token_type": "bearer"}
