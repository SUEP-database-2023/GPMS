"""create topic table

Revision ID: 1eb632ce6098
Revises: 0e833e05ff12
Create Date: 2023-06-25 13:18:25.763709

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "1eb632ce6098"
down_revision = "0e833e05ff12"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "topic",
        sa.Column(
            "id",
            sa.Integer,
            autoincrement=True,
            index=True,
            comment="主键id",
            primary_key=True,
        ),
        sa.Column(
            "number",
            sa.String(9),
            index=True,
            comment="课题编号",
        ),
        sa.Column("name", sa.String(30), nullable=False, comment="课题名称"),
        sa.Column(
            "whether_background",
            sa.Boolean,
            default=False,
            nullable=False,
            comment="是否有项目背景",
        ),
        sa.Column("have_bg_id", sa.String(20), nullable=True, comment="有项目背景的项目编号"),
        sa.Column("have_bg_else", sa.String(100), nullable=True, comment="有项目背景的其他补充"),
        sa.Column("category", sa.String(10), nullable=False, comment="课题性质（类别）"),
        sa.Column("synopsis", sa.String(5000), nullable=False, comment="课题简介"),
        sa.Column("remark", sa.String(200), nullable=True, comment="备注"),
        sa.Column("user_id", sa.Integer, nullable=False, comment="教师user_id"),
        sa.Column("teacher_name", sa.String(10), nullable=False, comment="指导教师"),
        sa.Column(
            "whether_pass",
            sa.Boolean,
            default=False,
            nullable=False,
            comment="是否审核通过",
        ),
        sa.Column("major", sa.String(10), nullable=False, comment="课题适用专业"),
        sa.Column("post_time", sa.DateTime, nullable=False, comment="课题提交时间"),
    )


def downgrade() -> None:
    op.drop_table("topic")
