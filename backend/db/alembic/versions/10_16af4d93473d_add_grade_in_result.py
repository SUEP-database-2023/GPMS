"""add_grade_in_result

Revision ID: 16af4d93473d
Revises: 705608937e8a
Create Date: 2023-07-03 17:01:52.512106

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "16af4d93473d"
down_revision = "705608937e8a"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("result", sa.Column("grade", sa.String(10), comment="年级"))


def downgrade() -> None:
    op.drop_column("result", "grade")
