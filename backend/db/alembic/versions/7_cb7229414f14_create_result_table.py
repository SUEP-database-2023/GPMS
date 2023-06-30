"""create result table

Revision ID: cb7229414f14
Revises: c10b20182c61
Create Date: 2023-06-25 13:32:08.175477

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "cb7229414f14"
down_revision = "c10b20182c61"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "result",
        sa.Column(
            "id",
            sa.Integer,
            autoincrement=True,
            index=True,
            comment="序列号",
            primary_key=True,
        ),
        sa.Column("user_id", sa.String(10), index=True, comment="学生编号"),
        sa.Column("topic_id", sa.String(9), nullable=False, comment="最终选择的课题编号"),
        sa.Column("status_1", sa.Integer, nullable=True, comment="第几轮选题选中"),
        sa.Column("status_2", sa.Integer, nullable=True, comment="选中第几志愿"),
    )


def downgrade() -> None:
    op.drop_table("result")
