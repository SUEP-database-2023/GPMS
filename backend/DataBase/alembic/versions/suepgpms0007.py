"""creat result table

Revision ID: suepgpms0007
Revises: suepgpms0006
Create Date: 2023-06-23 15:04:44.675092

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "suepgpms0007"
down_revision = "suepgpms0006"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "result",
        sa.Column(
            "student_id", sa.Integer, primary_key=True, index=True, comment="学生编号"
        ),
        sa.Column("topic_id", sa.Integer, nullable=False, comment="最终选择的课题编号"),
        sa.Column("status1", sa.String(1), nullable=False, comment="第几轮选题选中"),
        sa.CheckConstraint("status1 IN ('1', '2')", name="ck_status1_options"),
        sa.Column("status2", sa.String(1), nullable=False, comment="选中第几志愿"),
        sa.CheckConstraint(
            "status2 IN ('1', '2', '3', '4')", name="ck_status2_options"
        ),
        sa.Column("topic_mission", sa.String(100), nullable=False, comment="教师上传课题任务"),
        sa.Column("topic_discuss", sa.String(100), nullable=False, comment="学生上传专题讨论"),
    )


def downgrade() -> None:
    op.drop_table("result")
