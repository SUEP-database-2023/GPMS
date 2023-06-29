"""create topic table

Revision ID: 1eb632ce6098
Revises: 0e833e05ff12
Create Date: 2023-06-25 13:18:25.763709

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1eb632ce6098'
down_revision = '0e833e05ff12'
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
            comment="序列号",
        ),
        sa.Column(
            "topic_id",
            sa.Integer,
            index=True,
            comment="课题编号",
        ),
        sa.Column("topic_name", sa.String(15), nullable=False, comment="课题名称"),
        sa.Column(
            "topic_whether_background", sa.Boolean,default=False, nullable=False, comment="是否有项目背景"
        ),
        sa.Column("topic_havebg_id", sa.String(20), nullable=True, comment="有项目背景的项目编号"),
        sa.Column("topic_havebg_else", sa.String(100), nullable=True, comment="有项目背景的其他补充"),
        sa.Column("topic_category", sa.String(10), nullable=False, comment="课题性质（类别）"),
        sa.Column("topic_synopsis", sa.String(5000), nullable=False, comment="课题简介"),
        sa.Column("topic_remark", sa.String(200), nullable=True, comment="备注"),
        sa.Column("topic_teacher", sa.String(10), nullable=False, comment="指导教师"),
        sa.Column("topic_whether_pass", sa.Boolean, default=False,nullable=False, comment="是否审核通过"),
        sa.Column("topic_major", sa.String(10), nullable=False, comment="课题适用专业"),
        sa.Column("topic_time", sa.DateTime, nullable=False, comment="课题提交时间"),
    )


def downgrade() -> None:
    op.drop_table("topic")
