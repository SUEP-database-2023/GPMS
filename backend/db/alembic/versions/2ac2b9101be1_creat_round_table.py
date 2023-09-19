"""creat round table

Revision ID: 2ac2b9101be1
Revises: 16af4d93473d
Create Date: 2023-09-12 00:33:20.978380

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "2ac2b9101be1"
down_revision = "16af4d93473d"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "rounds",
        sa.Column(
            "id",
            sa.Integer,
            index=True,
            comment="主键id",
            primary_key=True,
        ),
        sa.Column(
            "round",
            sa.Integer,
            index=True,
            comment="选课轮次",
        ),
    )


def downgrade() -> None:
    op.drop_table("rounds")
