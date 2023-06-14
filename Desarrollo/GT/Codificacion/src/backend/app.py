from flask import Flask, jsonify, render_template
from Querys import obtener_cantidad_tickets, obtener_historial_comidas, calcular_tiempo_llegada_0_tickets

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


@app.route('/obtener_historial_comidas', methods=['GET'])
def obtener_historial_comidas_route():
    historial_comidas = obtener_historial_comidas()

    # Retorna los datos del historial en formato JSON
    return jsonify({'historial_comidas': historial_comidas})


# Ruta para calcular el tiempo necesario para llegar a 0 tickets
@app.route('/calcular_tiempo_llegada_0_tickets', methods=['GET'])
def calcular_tiempo_llegada_0_tickets_route():
    tiempo_llegada_0_tickets = calcular_tiempo_llegada_0_tickets()

    if tiempo_llegada_0_tickets is None:
        return jsonify({'tiempo_llegada_0_tickets': None})

    # Retorna el tiempo en formato JSON
    return jsonify({'tiempo_llegada_0_tickets': tiempo_llegada_0_tickets})


# Ruta principal
@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
