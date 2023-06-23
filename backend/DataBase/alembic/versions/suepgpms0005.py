"""creat topic table

Revision ID: suepgpms0005
Revises: suepgpms0004
Create Date: 2023-06-23 14:23:42.826109

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "suepgpms0005"
down_revision = "suepgpms0004"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "topic",
        sa.Column(
            "topic_id",
            sa.Integer,
            primary_key=True,
            index=True,
            comment="课题编号",
        ),
        sa.Column("topic_name", sa.String(15), nullable=False, comment="课题名称"),
        sa.Column(
            "topic_whether_background", sa.String(1), nullable=False, comment="是否有项目背景"
        ),
        sa.CheckConstraint(
            "topic_whether_background IN ('是', '否')",
            name="ck_topic_whether_background_options",
        ),
        sa.Column("topic_havebg_id", sa.Integer, nullable=False, comment="有项目背景的项目编号"),
        sa.Column("topic_else", sa.String(100), nullable=True, comment="其他补充"),
        sa.Column("topic_category", sa.String(10), nullable=False, comment="课题性质（类别）"),
        sa.CheckConstraint(
            "topic_category IN ('基础类型', '工程实践/应用类型','其他')",
            name="ck_topic_category_options",
        ),
        sa.Column("topic_synopsis", sa.String(5000), nullable=False, comment="课题简介"),
        sa.Column("topic_remark", sa.String(200), nullable=True, comment="备注"),
        sa.Column("topic_teacher", sa.String(10), nullable=False, comment="指导教师"),
        sa.Column("topic_whether_pass", sa.String(1), nullable=False, comment="是否审核通过"),
        sa.CheckConstraint(
            "topic_whether_pass IN ('是', '否')", name="ck_topic_whether_pass_options"
        ),
        sa.Column("topic_major", sa.String(10), nullable=False, comment="课题使用专业"),
        sa.CheckConstraint(
            "topic_major IN ('信息与计算科学', '应用物理')",
            name="ck_topic_major_options",
        ),
        sa.Column("topic_time", sa.DateTime, nullable=False, comment="课题提交时间"),
        sa.Column("topic_annex", sa.String(100), nullable=False, comment="课题提交附件以及路径"),
    )


def downgrade() -> None:
    op.drop_table("topic")
