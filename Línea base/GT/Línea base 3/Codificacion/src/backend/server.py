#Conexión inicial a la Base de datos.

import pyodbc 
import os

# Asignar valor a la variable de entorno
os.environ['NOMBRE_VARIABLE'] = 'valor'

# Ejemplo específico para una conexión SQL
os.environ['SQL_SERVER'] = 'BRANLAP\MACROSYSTEM'
os.environ['SQL_DATABASE'] = 'MacroSystem'
os.environ['SQL_USER'] = 'ProXelor'
os.environ['SQL_PASSWORD'] = '1234'

server = 'BRANLAP\MACROSYSTEM'
bd = 'MacroSystem'
usuario = 'PrograXelor'
contrasena = '1234pro'

#Controlador de errores.

try:
    conexion = pyodbc.connect('DRIVER={SQL server};SERVER='+server+';DATABASE='+bd+';UID='+usuario+';PWD='+contrasena)
    
    print('conexion lograda')
    
except:
    
    print('error al intentar conectarse')
    