from datetime import datetime, timedelta
from jose import jwt

from passlib.context import CryptContext

SECRET_KEY = (
    "196ca263383b2fd21dfae2eda445f30b25d14806a861ababf10a408beb5e2117"
    # 用于创建令牌的密钥
)
ALGORITHM = "HS256"  # 用HS256算法进行加密
ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 15  # 令牌过期时间，单位为分钟

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")  # 用于加密密码


def create_access_token(id, role, expires_delta=None):
    if expires_delta:  # 如果传入了过期时间，就用传入的过期时间
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode = {
        "exp": expire,
        "id": str(id),
        "role": str(role),
    }  # 生成令牌的内容
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)  # 生成令牌
    return encoded_jwt


def verify_password(plain_password, hashed_password):  # 用于验证密码
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):  # 用于加密密码
    return pwd_context.hash(password)
