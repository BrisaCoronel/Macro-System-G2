import React, { useState } from "react";
import { Modal } from "./Componentes/Modal";
import { Contenedorprincipal, Contenedorsec, Header } from "./Componentes/Contenedor-principal";
import { ContenedorConteo, ContenedorTiempo } from "./Componentes/Conteo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [estadoModal, cambiarEstadoModal] = useState(true);

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
              <Contenedorprincipal num="800" imagen="gusano" />
              <Contenedorsec />
            </div>
          } />
        </Routes>

        <Routes>
          <Route path="/conteo" element={
            <div>
              <ContenedorConteo 
                horario = "ALMUERZO"
                num1 = "308"
              />
              <ContenedorTiempo 
                num2 = "00:30:00"
              />
              <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal} />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
