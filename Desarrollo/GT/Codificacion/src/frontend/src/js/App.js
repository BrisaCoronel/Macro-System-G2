import React, { useEffect, useState } from "react";
import { Modal } from "../Componentes/Modal";
import { Contenedorprincipal, Contenedorsec, Header } from "../Componentes/Contenedor-principal";
import { ContenedorConteo, ContenedorTiempo } from "../Componentes/Conteo";
import { Historial } from "../Componentes/Historial";
import { ComponenteCommedor, ComponentePrincipal, ComponenteNutricional, ComponentePartes} from "../Componentes/InfoNutricional";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../Stylesheets/App.css";
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
              
                <Historial
                  date1="20/04/2023"
                  imagenizq1="desayuno1"
                  imagencentr1="almuerzo1"
                  imagender1="cena1"
                  date2="21/04/2023"
                  imagenizq2="desayuno2"
                  imagencentr2="almuerzo2"
                  imagender2="cena2"
                  date3="22/04/2023"
                  imagenizq3="desayuno3"
                  imagencentr3="almuerzo3"
                  imagender3="cena3"
                  date4="23/04/2023"
                  imagenizq4="desayuno4"
                  imagencentr4="almuerzo4"
                  imagender4="cena4"
                />
              
            </div>
          } />
        </Routes>
        <Routes>
          <Route path="/informacionNutricional" element={
            <div>
                <ComponenteCommedor
                  date="22/04/2023"
                />
                <ComponentePrincipal
                  imagenizq="desayuno3"
                  imagencentr="almuerzo3"
                  imagender="cena3"
                  descripcionizq="Bebida: Semola con chocolate
                  Fruta: plátano"
                  descripcioncentr="Entrada: Mazamorra de piña
                  Plato de fondo: chaufa de pollo"
                  descripcionder ="Plato de fondo: Cau CAu de pollo"
                  complementosizq ="Pan con mantequilla
                  Pan con queso"
                  complementoscentr="Vaso de refresco de cocona
                  Fruta: pera"
                  complementosder="Vaso de refresco anpis
                  Fruta: Sandía"
                />
                <ComponentePartes
                  imgcaloria="caloria"
                  imggrasa="grasa"
                  imgproteina="proteina"
                  imgcarbohidrato="carbohidrato"
                  caloriaizq="800"
                  grasaizq="20"
                  proteinaizq="80"
                  carbohidratoizq="20"
                  caloriacentr="800"
                  grasacentr="20"
                  proteinacentr="80"
                  carbohidratocentr="20"
                  caloriader="800"
                  grasader="20"
                  proteinader="80"
                  carbohidratoder="20"
                />  
              
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;