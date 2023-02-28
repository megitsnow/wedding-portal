from flask import Flask 
from model import connect_to_db 

app = Flask(__name__)
app.secret_key = "dev"

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

if __name__ == "__main__":

    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)