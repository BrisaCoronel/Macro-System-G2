import server

def obtener_cantidad_tickets():
    # Conexión a la base de datos
    conexion = server.conexion
    cursor = conexion.cursor()

    # Ejecutar consulta para obtener la cantidad de tickets
    cursor.execute("SELECT * FROM TicketsALM;")
    TicketsALM = cursor.fetchone()
    cantidad_tickets = TicketsALM[1] if TicketsALM else None

    # Cerrar cursor y conexión
    cursor.close()
    conexion.close()

    return cantidad_tickets


def obtener_historial_comidas():
    # Conexión a la base de datos
    conexion = server.conexion
    cursor = conexion.cursor()

    # Ejecutar consulta para obtener el historial de comidas ofrecidas
    cursor.execute("SELECT Fecha, Nombre FROM Productos;")
    historial_comidas = cursor.fetchall()

    # Cerrar cursor y conexión
    cursor.close()
    conexion.close()

    return historial_comidas


def calcular_tiempo_llegada_0_tickets():
    cantidad_tickets = obtener_cantidad_tickets()

    if cantidad_tickets is None:
        return None

    # Aquí debes escribir la lógica para calcular el tiempo necesario para llegar a 0 tickets
    tiempo_llegada_0_tickets = cantidad_tickets * 8  # Ejemplo: tiempo estimado de 8 minutos por ticket

    return tiempo_llegada_0_tickets
