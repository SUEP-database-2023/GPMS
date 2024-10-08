"""create users table

Revision ID: 90ef2bf3bc86
Revises: d29b9a799713
Create Date: 2023-06-23 21:31:00.762724

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "90ef2bf3bc86"
down_revision = "d29b9a799713"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column(
            "id",
            sa.Integer,
            autoincrement=True,
            index=True,
            comment="主键id",
            primary_key=True,
        ),
        sa.Column("number", sa.String(10), index=True, comment="用户id"),
        sa.Column("password", sa.String(200), nullable=False, comment="用户密码"),
        sa.Column("role", sa.Integer, nullable=False, comment="用户权限"),
    )


def downgrade() -> None:
    op.drop_table("users")
