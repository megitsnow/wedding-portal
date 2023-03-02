from flask import Flask, request, jsonify
from model import connect_to_db, db
import crud
import bcrypt
import hashlib, sys

app = Flask(__name__)
app.secret_key = "dev"

salt = bcrypt.gensalt()

HTTP_RESPONSE_CODES = {
    "success": 200,
    "noContent": 204,
    "unauthorized": 401,
    "forbidden": 403,
    "doesntExist": 404,
    "methodNotAllowed": 405,
    "notAcceptable": 406,
    "conflict": 409,
    "unprocessedEntity": 422,
    "serverError": 500
}

@app.route("/api/sign-up", methods=["POST"])
def handle_signup():
    """Create a new user."""
    fname = request.json.get("fname")
    lname = request.json.get("lname")
    email = request.json.get("email")
    password = request.json.get("password")
    password_confirm = request.json.get("passwordConfirm")
    new_password = password.encode()
    hashed = bcrypt.hashpw(new_password, salt)
    print(f'*****THIS IS THE HASHED PW! {hashed}')


    if crud.get_user_by_email(email) is None and password == password_confirm:
        user = crud.create_user(fname = fname, lname = lname, email = email, password = password)
        db.session.add(user)
        db.session.commit()
    else:
        return {'Status': 400, "Message": "Passwords do not match"}

    return jsonify(user.to_dict())


@app.route("/api/log-in", methods=["POST"])
def handle_login():
    """Sign in a user and add to the session if already a user"""

    email = request.json.get("email")
    print(email)
    password = request.json.get("password")
    print(password)
    
    user = crud.get_user_by_email(email)
    print(user)

    if not user or user.password != password:
        print("The email or password you entered was incorrect.")
    else:
        print(f"Welcome back, {user.email}!")

    return jsonify(user.to_dict())


if __name__ == "__main__":

    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)