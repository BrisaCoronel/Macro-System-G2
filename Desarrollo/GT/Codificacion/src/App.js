import React, {useState} from "react";
import {Modal} from "./Componentes/Modal";
import {Contenedorprincipal, Contenedorsec, Header} from "./Componentes/Contenedor-principal";

function App() {
  const [estadoModal, cambiarEstadoModal]  = useState(true);
  return (
    <div>
      <Header 
      
      linkUrl="#"
      imagen="logo" 
      altText="Logo Ejemplo" 
      />
      <div>
        <Contenedorprincipal 
        num="800"
        imagen= "gusano"/>
      </div>
      
      <Modal
        estado = {estadoModal}
        cambiarEstado={cambiarEstadoModal}
      />
      <Contenedorsec />
    
    </div>
  );
}

export default App;
