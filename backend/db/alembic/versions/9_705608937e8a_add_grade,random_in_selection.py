"""add_grade,random_in_selection

Revision ID: 705608937e8a
Revises: ca44fe69e3fb
Create Date: 2023-07-03 16:35:25.331578

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "705608937e8a"
down_revision = "ca44fe69e3fb"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("selection", sa.Column("grade", sa.String(10), comment="年级"))
    op.add_column("selection", sa.Column("random", sa.INTEGER, comment="随机数"))


def downgrade() -> None:
    op.drop_column("selection", "grade")
    op.drop_column("selection", "random")
