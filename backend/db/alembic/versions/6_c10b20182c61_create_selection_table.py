"""create selection table

Revision ID: c10b20182c61
Revises: 1eb632ce6098
Create Date: 2023-06-25 13:28:38.714330

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "c10b20182c61"
down_revision = "1eb632ce6098"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "selection",
        sa.Column(
            "id",
            sa.Integer,
            autoincrement=True,
            index=True,
            comment="主键id",
            primary_key=True,
        ),
        sa.Column("user_id", sa.Integer, index=True, comment="学生user_id"),
        sa.Column("student_number", sa.String(8), nullable=True, comment="学生学号"),
        sa.Column("choice1_number", sa.String(9), nullable=True, comment="第一志愿课题编号"),
        sa.Column("choice1_id", sa.Integer, nullable=True, comment="第一志愿课程id"),
        sa.Column("choice2_number", sa.String(9), nullable=True, comment="第二志愿课题编号"),
        sa.Column("choice2_id", sa.Integer, nullable=True, comment="第二志愿课程id"),
        sa.Column("choice3_number", sa.String(9), nullable=True, comment="第三志愿课题编号"),
        sa.Column("choice3_id", sa.Integer, nullable=True, comment="第三志愿课程id"),
        sa.Column("choice4_number", sa.String(9), nullable=True, comment="第四志愿课题编号"),
        sa.Column("choice4_id", sa.Integer, nullable=True, comment="第四志愿课程id"),
        sa.Column("time", sa.DateTime, nullable=True, comment="选题时间"),
        sa.Column("round", sa.Integer, nullable=True, comment="第几轮选题"),
    )


def downgrade() -> None:
    op.drop_table("selection")
