from flask import Flask
from flask import jsonify
from flask_cors import CORS
from flask import request
import json

login_base = ['admin1', 'halo', 'ok']
password_base = ['admin', '123', 'haslo']


app = Flask(__name__)
CORS(app)


@app.route('/verify',methods=['POST'])
def verify():
    login_check = False
    password_check = False
    request_data = request.get_json()
    for n in range(len(login_base)):
        if login_base[n] == request_data['login']:
            login_check = True
    for n in range(len(password_base)):
        if password_base[n] == request_data['password']:
            password_check = True

    return jsonify(
        {
            "login_check": login_check,
            "password_check": password_check
        }
    )


app.run()