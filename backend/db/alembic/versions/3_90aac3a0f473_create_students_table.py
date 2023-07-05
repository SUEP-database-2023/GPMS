"""create students table

Revision ID: 90aac3a0f473
Revises: 3dfbf4132daf
Create Date: 2023-06-23 22:50:41.152216

"""
from alembic import op
import sqlalchemy as sa
import random


# revision identifiers, used by Alembic.
revision = "90aac3a0f473"
down_revision = "3dfbf4132daf"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "students",
        sa.Column(
            "id",
            sa.Integer,
            autoincrement=True,
            index=True,
            comment="主键id",
            primary_key=True,
        ),
        sa.Column(
            "user_id",
            sa.Integer,
            index=True,
            comment="users外键id",
        ),
        sa.Column(
            "number",
            sa.String(8),
            index=True,
            comment="学生学号",
        ),
        sa.Column("name", sa.String(10), nullable=False, comment="学生姓名"),
        sa.Column("major", sa.String(10), nullable=False, comment="学生专业"),
        sa.Column("grade", sa.String(4), nullable=False, comment="年级"),
        sa.Column("team", sa.String(10), nullable=False, comment="班级"),
        sa.Column("phone", sa.String(11), nullable=False, comment="电话号码"),
        sa.Column("random", sa.Integer, nullable=False, comment="随机数"),
    )


def downgrade() -> None:
    op.drop_table("students")
