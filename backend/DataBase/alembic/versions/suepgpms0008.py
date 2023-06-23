"""creat users table

Revision ID: suepgpms0008
Revises: suepgpms0007
Create Date: 2023-06-23 15:11:38.064706

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "suepgpms0008"
down_revision = "suepgpms0007"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("user_id", sa.Integer, primary_key=True, index=True, comment="用户编号"),
    )


def downgrade() -> None:
    op.drop_table("users")
