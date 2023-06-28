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
        sa.Column("user_id", sa.Integer, primary_key=True, index=True, comment="用户id"),
        sa.Column("user_pwd", sa.String(25), nullable=False, comment="用户密码"),
        sa.Column("user_root", sa.String(1), nullable=False, comment="用户权限"),
        sa.CheckConstraint(
            "user_root IN ('a', 't', 's')",
            name="ck_user_root_options",
        ),
    )



def downgrade() -> None:
    op.drop_table("users")
