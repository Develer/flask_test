import json
import sys
import time

from datetime import datetime

from flask import Flask
from flask import g
from flask import jsonify
from flask import render_template
from flask import request
from flask_pymongo import PyMongo
from werkzeug.serving import run_simple


app = Flask(__name__)

# app.config['MONGO_DBNAME'] = 'campaign'
# app.config['MONGO_URI'] = 'mongodb://localhost:27017/campaign'

mongo = PyMongo(app)


@app.after_request
def call_after_request_callbacks(response):
    if request.path.startswith('/store'):
        time.sleep(5)
        timestamp = g.campaign_timestamp
        mongo.db.campaign.insert({'timestamp': timestamp})
    return response


@app.route('/home', methods=['GET'])
def home():
    img = 'http://loremflickr.com/320/240'
    return render_template('home.html', img=img)


@app.route('/store', methods=['GET'])
@app.route('/store/<type_value>', methods=['GET'])
def store(type_value=None):
    timestamp = datetime.utcnow().isoformat()
    g.campaign_timestamp = timestamp
    if type_value == 'json':
        return jsonify(timestamp=timestamp, success=True)
    return render_template('store.html', timestamp=timestamp)


@app.route('/list', methods=['GET'])
@app.route('/list/<type_value>', methods=['GET'])
def list(type_value=None):
    timestamps = mongo.db.campaign.find().sort('_id', 1).limit(20)
    data = [t['timestamp'] for t in timestamps]
    if type_value == 'json':
        return jsonify(timestamps=data)
    return render_template('list.html', timestamps=data)


@app.route('/post', methods=['POST'])
def post():
    data = json.loads(request.data.decode("utf-8"))
    mongo.db.campaign.insert(data)
    return "OK!"


if __name__ == "__main__":
    # app.run()
    run_simple('localhost', 5001, app)
