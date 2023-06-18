"""creat admins table

Revision ID: suepgpms0001
Revises: suepgpms0000
Create Date: 2023-06-18 16:52:01.055219

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "suepgpms0001"
down_revision = "suepgpms0000"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "admins",
        sa.Column("admin_id", sa.Integer, primary_key=True, index=True),
        sa.Column("admin_name", sa.String(10), nullable=False),
        sa.Column("admin_pwd", sa.String(15), nullable=False),
    )


def downgrade() -> None:
    op.drop_table("admins")
