from flask import Flask, jsonify, flash, redirect, render_template
from Querys import obtener_cantidad_tickets

app = Flask(__name__)
app.secret_key = 'caramandunga'
app.debug = True

# Ruta para obtener los datos de los tickets
@app.route('/', methods=['GET'])
def mostrar_cantidad_tickets():
    cantidad_tickets = obtener_cantidad_tickets()

    if cantidad_tickets is None:
        flash('¡Se han agotado los tickets!', 'warning')
        return redirect('/')

    return str(cantidad_tickets)

if __name__ == '__main__':
    app.run()
