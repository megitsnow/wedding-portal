"""CRUD operations."""

from model import db, connect_to_db, User

def create_user(fname, lname, email, password):
    """Create and return a new user."""

    user = User(fname = fname,lname = lname, email=email, password=password)

    return user

def get_user_by_email(email):
    """Return a user by email."""

    return User.query.filter(User.email == email).first()

if __name__ == "__main__":
    from server import app

    connect_to_db(app)