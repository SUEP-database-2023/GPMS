"""create selection table

Revision ID: c10b20182c61
Revises: 1eb632ce6098
Create Date: 2023-06-25 13:28:38.714330

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c10b20182c61'
down_revision = '1eb632ce6098'
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
            comment="序列号",
        ),
        sa.Column(
            "student_id", sa.Integer, index=True, comment="学生编号"
        ),
        sa.Column("topic1_id", sa.Integer, nullable=False, comment="第一志愿id"),
        sa.Column("topic2_id", sa.Integer, nullable=False, comment="第二志愿id"),
        sa.Column("topic3_id", sa.Integer, nullable=False, comment="第三志愿id"),
        sa.Column("topic4_id", sa.Integer, nullable=False, comment="第四志愿id"),
        sa.Column("select_time", sa.DateTime, nullable=False, comment="选题时间"),
        sa.Column("select_status", sa.Integer, nullable=False, comment="第几轮选题"),
        
    )


def downgrade() -> None:
    op.drop_table("selection")