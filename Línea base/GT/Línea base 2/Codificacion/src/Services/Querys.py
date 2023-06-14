import Macrosystem

def obtener_cantidad_tickets():

    # Conexión a la base de datos
    conexion = Macrosystem.conexion
    cursor = conexion.cursor()

    # Ejecutar consulta para obtener la cantidad de tickets
    cursor.execute("SELECT * FROM TicketsALM;")
    TicketsALM = cursor.fetchone()
    cantidad_tickets = TicketsALM[1] if TicketsALM else None

     # Cerrar cursor y conexión
    cursor.close()
    conexion.close()
    return cantidad_tickets
