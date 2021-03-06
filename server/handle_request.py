
import sqlite3



# handles opening the sqlite database, running the query and closing the connection after retrieval of the data

def handle_request(query):
  conn = sqlite3.connect('./server/db.db')
  cursor = conn.cursor()
  cursor.row_factory = sqlite3.Row

  cursor.execute(query)
  results = cursor.fetchall()

  rowarray_list = []
  for row in results:
    d = dict(zip(row.keys(), row))
    rowarray_list.append(d)

  conn.close()

  return rowarray_list