"""create status table

Revision ID: 0e833e05ff12
Revises: 90aac3a0f473
Create Date: 2023-06-25 12:58:04.794803

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "0e833e05ff12"
down_revision = "90aac3a0f473"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "status",
        sa.Column(
            "id",
            sa.Integer,
            autoincrement=True,
            index=True,
            comment="主键id",
            primary_key=True,
        ),
        sa.Column(
            "teacher_post_time",
            sa.DateTime,
            nullable=False,
            comment="教师提交题目截止时间/管理员审核题目开始时间",
        ),
        sa.Column(
            "admin_audit_time",
            sa.DateTime,
            nullable=False,
            comment="管理员审核题目截止时间/学生浏览题目开始时间",
        ),
        sa.Column(
            "student_begin_time1",
            sa.DateTime,
            nullable=False,
            comment="学生第一次选题开始时间/学生浏览题目结束时间",
        ),
        sa.Column(
            "student_end_time1",
            sa.DateTime,
            nullable=False,
            comment="学生第一次选题截止时间/管理员第一次匹配开始时间",
        ),
        sa.Column(
            "admin_end_time1",
            sa.DateTime,
            nullable=False,
            comment="管理员第一次匹配截止时间/学生第二次选题开始时间",
        ),
        sa.Column(
            "student_end_time2",
            sa.DateTime,
            nullable=False,
            comment="学生第二次选题截止时间/管理员第二次匹配开始时间",
        ),
        sa.Column(
            "admin_end_time2", sa.DateTime, nullable=False, comment="管理员第二次匹配截止时间"
        ),
        sa.Column("post_time", sa.DateTime, nullable=False, comment="当前提交时间"),
        sa.Column("major", sa.String(10), nullable=False, comment="设置适用专业"),
    )


def downgrade() -> None:
    op.drop_table("status")
