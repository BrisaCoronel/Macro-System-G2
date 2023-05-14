import React, {useState} from "react";
import Modal from "./Componentes/Modal";
import {Header, Contenedorprincipal, Contenedorsec} from "./Componentes/Contenedor-principal";
function App() {
  const [estadoModal, cambiarEstadoModal]  = useState(true);
  return (
    <div>
      <Header 
      linkUrl="#"
      imagen="logo" 
      altText="Logo Ejemplo" />
      <Contenedorprincipal 
      num="800" />
      <Modal
        estado = {estadoModal}
        cambiarEstado={cambiarEstadoModal}
      />
      <Contenedorsec />
    </div>
  );
}

export default App;
