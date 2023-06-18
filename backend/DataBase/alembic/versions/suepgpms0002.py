"""creat teachers table

Revision ID: suepgpms0002
Revises: suepgpms0001
Create Date: 2023-06-18 16:56:32.611214

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "suepgpms0002"
down_revision = "suepgpms0001"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "teachers",
        sa.Column("teacher_id", sa.Integer, primary_key=True, index=True),
        sa.Column("teacher_name", sa.String(10), nullable=False),
        sa.Column("teacher_pwd", sa.String(15), nullable=False),
        sa.Column("teacher_spec", sa.String(10), nullable=False),
        sa.Column("teacher_prof", sa.String(10), nullable=False),
        sa.CheckConstraint(
            "teacher_spec IN ('信息与计算科学', '应用物理')", name="ck_teacher_spec_options"
        ),
    )


def downgrade() -> None:
    op.drop_table("teachers")
