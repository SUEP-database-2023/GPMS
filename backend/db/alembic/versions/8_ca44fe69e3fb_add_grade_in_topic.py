"""add grade in topic

Revision ID: ca44fe69e3fb
Revises: cb7229414f14
Create Date: 2023-07-02 20:23:58.598107

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "ca44fe69e3fb"
down_revision = "cb7229414f14"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("topic", sa.Column("grade", sa.String(10), comment="年级"))


def downgrade() -> None:
    op.drop_column("topic", "grade")
