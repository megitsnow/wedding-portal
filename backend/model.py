"""Models for a personal wedding portal app"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """A user."""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    fname = password = db.Column(db.String)
    lname = password = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    img = db.Column(db.String, nullable = True)

    def to_dict(self):
        return {'user_id': self.user_id,
                'fname': self.fname,
                'lname': self.lname,
                'email': self.email,
                'password': self.password,
                'img': self.img}

    def __repr__(self):
        return f"<User user_id={self.user_id} email={self.email}>"
    
def connect_to_db(flask_app, db_uri="postgresql:///wedding_portal_database", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")


if __name__ == "__main__":
    from server import app

    connect_to_db(app)