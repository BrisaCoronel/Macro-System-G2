from flask import Flask, jsonify, flash, redirect, render_template
from Querys import obtener_cantidad_tickets

app = Flask(__name__)
app.secret_key = 'caramandunga'
app.debug = True

# Ruta para obtener los datos de los tickets
@app.route('/obtener_cantidad_tickets', methods=['GET'])
def obtener_cantidad_tickets_route():
    cantidad_tickets = obtener_cantidad_tickets()

    if cantidad_tickets is None:
        return jsonify({'cantidad_tickets': None})

    return jsonify({'cantidad_tickets': cantidad_tickets})

# Ruta principal
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
