"""creat selection table

Revision ID: suepgpms0006
Revises: suepgpms0005
Create Date: 2023-06-23 14:58:36.051938

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "suepgpms0006"
down_revision = "suepgpms0005"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "selection",
        sa.Column(
            "student_id", sa.Integer, primary_key=True, index=True, comment="学生编号"
        ),
        sa.Column("topic1_id", sa.Integer, nullable=False, comment="第一志愿id"),
        sa.Column("topic2_id", sa.Integer, nullable=False, comment="第二志愿id"),
        sa.Column("topic3_id", sa.Integer, nullable=False, comment="第三志愿id"),
        sa.Column("topic4_id", sa.Integer, nullable=False, comment="第四志愿id"),
        sa.Column("select_time", sa.DateTime, nullable=False, comment="选题时间"),
        sa.Column("select_status", sa.String(1), nullable=False, comment="第几轮选题"),
        sa.CheckConstraint(
            "select_status IN ('1', '2')", name="ck_select_status_options"
        ),
    )


def downgrade() -> None:
    op.drop_table("selection")
