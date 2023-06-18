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
        sa.Column(
            "student_id", sa.Integer, primary_key=True, index=True, comment="学生编号"
        ),
        sa.Column("student_name", sa.String(10), nullable=False, comment="学生姓名"),
        sa.Column("student_pwd", sa.String(15), nullable=False, comment="学生账号密码"),
        sa.Column("student_sex", sa.String(2), nullable=False, comment="性别"),
        sa.Column("student_spec", sa.String(10), nullable=False, comment="学生专业"),
        sa.Column("student_grade", sa.Integer, nullable=False, comment="年级"),
        sa.Column("student_class", sa.String(10), nullable=False, comment="班级"),
        sa.Column("student_phone", sa.String(11), nullable=False, comment="手机号码"),
        sa.Column("student_random", sa.Integer, nullable=False, comment="随机数"),
        sa.CheckConstraint("student_sex IN ('男', '女')", name="ck_student_sex_options"),
        sa.CheckConstraint(
            "student_spec IN ('信息与计算科学', '应用物理')", name="ck_student_spec_options"
        ),
    )


def downgrade() -> None:
    op.drop_table("students")
