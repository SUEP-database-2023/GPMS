"""create result table

Revision ID: cb7229414f14
Revises: c10b20182c61
Create Date: 2023-06-25 13:32:08.175477

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cb7229414f14'
down_revision = 'c10b20182c61'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "result",
        sa.Column(
            "student_id", sa.Integer, primary_key=True, index=True, comment="学生编号"
        ),
        sa.Column("topic_id", sa.Integer, nullable=False, comment="最终选择的课题编号"),
        sa.Column("status_1", sa.String(1), nullable=True, comment="第几轮选题选中"),
        sa.CheckConstraint("status_1 IN ('1', '2')", name="ck_status_1_options"),
        sa.Column("status_2", sa.String(1), nullable=True, comment="选中第几志愿"),
        sa.CheckConstraint(
            "status_2 IN ('1', '2', '3', '4')", name="ck_status_2_options"
        ),
    )


def downgrade() -> None:
    op.drop_table("result")