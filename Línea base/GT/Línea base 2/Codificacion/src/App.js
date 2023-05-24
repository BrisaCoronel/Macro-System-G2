import React, { useEffect, useState } from "react";
import { Modal } from "./Componentes/Modal";
import { Contenedorprincipal, Contenedorsec, Header } from "./Componentes/Contenedor-principal";
import { ContenedorConteo, ContenedorTiempo } from "./Componentes/Conteo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [estadoModal, cambiarEstadoModal] = useState(true);
  const [cantidadTickets, setCantidadTickets] = useState(null);

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
      </div>
    </Router>
  );
}

export default App;
