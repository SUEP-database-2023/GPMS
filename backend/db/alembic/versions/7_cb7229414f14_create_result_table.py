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
            comment="主键id",
            primary_key=True,
        ),
        sa.Column("student", sa.String(8), index=True, comment="学生学号"),
        sa.Column("topic", sa.String(9), nullable=True, comment="课题编号"),
        sa.Column("round", sa.Integer, nullable=True, comment="选中轮次"),
        sa.Column("choice", sa.Integer, nullable=True, comment="选中志愿"),
    )


def downgrade() -> None:
    op.drop_table("result")
