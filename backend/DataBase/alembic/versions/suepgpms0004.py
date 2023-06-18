"""creat status table

Revision ID: suepgpms0004
Revises: suepgpms0003
Create Date: 2023-06-18 19:53:35.738769

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "suepgpms0004"
down_revision = "suepgpms0003"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "status",
        sa.Column(
            "status_id",
            sa.Integer,
            primary_key=True,
            autoincrement=True,
            index=True,
            comment="序列号",
        ),
        sa.Column("tea_posttime", sa.DateTime, nullable=False, comment="教师提交截止时间"),
        sa.Column("adm_audittime", sa.DateTime, nullable=False, comment="管理员审核题目截止时间"),
        sa.Column(
            "stu_begintime", sa.DateTime, nullable=False, comment="学生第一次选题开始时间/浏览题目结束时间"
        ),
        sa.Column("stu_endtime1", sa.DateTime, nullable=False, comment="学生第一次选题截止时间"),
        sa.Column("adm_endtime1", sa.DateTime, nullable=False, comment="管理员第一次匹配截止时间"),
        sa.Column("stu_endtime2", sa.DateTime, nullable=False, comment="学生第二次选题截止时间"),
        sa.Column("adm_endtime2", sa.DateTime, nullable=False, comment="管理员第二次匹配截止时间"),
        sa.Column("posttime", sa.DateTime, nullable=False, comment="设置提交时间"),
        sa.Column("status_spec", sa.String(10), nullable=False, comment="设置专业"),
    )


def downgrade() -> None:
    op.drop_table("status")
