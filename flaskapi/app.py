from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)


conn = sqlite3.connect("api.db", check_same_thread=False)
curr = conn.cursor()


@app.route('/')
def home():
    sql = '''
        SELECT * FROM todo
    '''
    curr.execute(sql)
    columns = [column[0] for column in curr.description]
    results = []
    for row in curr.fetchall():
        results.append(dict(zip(columns, row)))
    response = jsonify(results)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/add', methods=['POST'])
def add():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        json = request.json
        title = json['title']
        sql = '''
                    INSERT INTO todo (title) VALUES (?)
                '''
        data = (title,)
        curr.execute(sql, data)
        conn.commit()
        return "Başarıyla eklendi."
    else:
        return 'Content-Type not supported!'


@app.route('/delete', methods=['POST'])
def delete():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        json = request.json
        id = json['id']
        sql = '''
                    DELETE FROM todo WHERE id = (?)
                '''
        data = (id,)
        curr.execute(sql, data)
        conn.commit()
        return "Başarıyla silindi."
    else:
        return 'Content-Type not supported!'

if __name__ == '__main__':
    app.run(host="0.0.0.0")
