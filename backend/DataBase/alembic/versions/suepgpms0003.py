"""creat students table

Revision ID: suepgpms0003
Revises: suepgpms0002
Create Date: 2023-06-18 16:58:12.523155

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "suepgpms0003"
down_revision = "suepgpms0002"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "students",
        sa.Column("student_id", sa.Integer, primary_key=True, index=True),
        sa.Column("student_name", sa.String(10), nullable=False),
        sa.Column("student_pwd", sa.String(15), nullable=False),
        sa.Column("student_sex", sa.String(2), nullable=False),
        sa.Column("student_spec", sa.String(10), nullable=False),
        sa.Column("student_grade", sa.Integer, nullable=False),
        sa.Column("student_class", sa.String(10), nullable=False),
        sa.Column("student_phone", sa.String(11), nullable=False),
        sa.Column("student_random", sa.Integer, nullable=False),
        sa.CheckConstraint("student_sex IN ('男', '女')", name="ck_student_sex_options"),
    )


def downgrade() -> None:
    op.drop_table("students")
