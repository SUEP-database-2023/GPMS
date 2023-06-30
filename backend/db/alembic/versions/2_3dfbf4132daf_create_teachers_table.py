"""create teachers table

Revision ID: 3dfbf4132daf
Revises: 90ef2bf3bc86
Create Date: 2023-06-23 21:33:22.103809

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "3dfbf4132daf"
down_revision = "90ef2bf3bc86"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "teachers",
        sa.Column(
            "id",
            sa.Integer,
            autoincrement=True,
            index=True,
            comment="主键id",
            primary_key=True,
        ),
        sa.Column(
            "user_id",
            sa.Integer,
            index=True,
            comment="users外键id",
        ),
        sa.Column(
            "number",
            sa.String(10),
            comment="教师工号",
        ),
        sa.Column("name", sa.String(10), nullable=False, comment="教师姓名"),
        sa.Column("major", sa.String(10), nullable=False, comment="教师专业"),
        sa.Column("level", sa.String(10), nullable=False, comment="教师职称"),
        sa.Column(
            "origin",
            sa.Boolean,
            default=False,
            nullable=False,
            comment="教师是否来自校外",
        ),
    )


def downgrade() -> None:
    op.drop_table("teachers")
