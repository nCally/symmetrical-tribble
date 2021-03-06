import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS
from handle_request import handle_request

app = Flask(__name__)
CORS(app)


# This endpoint returns all the healthcare centers from the lagos_facilities table
# Endpoint /health-centers

@app.route('/health-centers')
def health_centers():

  get_query = '''
  SELECT * FROM lagos_facilities;
  '''

  data = handle_request(get_query)
  data = jsonify(data)

  return data




# This endpoint returns all the local govt. and details from the medics table
# Endpoint /local-govt

@app.route('/local-govt')
def local_govt():

  get_query = '''
  SELECT * FROM medics;
  '''
  data = handle_request(get_query)
  data = jsonify(data)

  return data


@app.route('/population')
def population():

  get_query = '''
  SELECT * FROM population;
  '''
  data = handle_request(get_query)
  data = jsonify(data)

  return data




#####################################################################

if __name__ == '__main__':
  app.run()