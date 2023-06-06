import React, { useEffect, useState } from "react";
import { Modal } from "../Componentes/Modal";
import { Contenedorprincipal, Contenedorsec, Header } from "../Componentes/Contenedor-principal";
import { ContenedorConteo, ContenedorTiempo } from "../Componentes/Conteo";
import { Historial } from "../Componentes/Historial";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [estadoModal, cambiarEstadoModal] = useState(true);
  const [cantidadTickets, setCantidadTickets] = useState(null);
  const [historialComidas, setHistorialComidas] = useState([]);

  useEffect(() => {
    fetch("/obtener_cantidad_tickets")
      .then(response => response.json())
      .then(data => {
        setCantidadTickets(data.cantidad_tickets);
        if (data.cantidad_tickets === null) {
          cambiarEstadoModal(true);
        }
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (cantidadTickets !== null) {
      fetch("/calcular_tiempo_llegada_0_tickets")
        .then(response => response.json())
        .then(data => {
          const tiempoLlegada = data.tiempo_llegada_0_tickets;
          setCantidadTickets(tiempoLlegada);
        })
        .catch(error => console.log(error));
    }
  }, [cantidadTickets]);

  useEffect(() => {
    fetch("/obtener_historial_comidas")
      .then(response => response.json())
      .then(data => {
        setHistorialComidas(data.historial_comidas);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Router>
      <div>
        <Header
          linkUrl="#"
          imagen="logo"
          altText="Logo Ejemplo"
        />

        <Routes>
          <Route path="/" element={
            <div>
              <Contenedorprincipal
                num={cantidadTickets || "800"}
                imagen="gusano"
              />
              <Contenedorsec />
            </div>
          } />
        </Routes>

        <Routes>
          <Route path="/conteo" element={
            <div>
              <ContenedorConteo
                horario="ALMUERZO"
                num1={cantidadTickets || "308"}
              />
              <ContenedorTiempo
                num2="00:30:00"
              />
              {cantidadTickets === null && <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal} />}
            </div>
          } />
        </Routes>
        <Routes>
          <Route path="/historial" element={
            <div>
              {historialComidas.map((comida, index) => (
                <Historial
                  key={index}
                  date1={comida[0]}
                  imagenizq1={comida[1]}
                  imagencentr1={comida[2]}
                  imagender1={comida[3]}
                  date2={comida[4]}
                  imagenizq2={comida[5]}
                  imagencentr2={comida[6]}
                  imagender2={comida[7]}
                />
              ))}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;