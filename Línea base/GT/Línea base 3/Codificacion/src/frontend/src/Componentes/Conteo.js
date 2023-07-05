import React from "react";
import { Link } from 'react-router-dom';
import "../Stylesheets/Conteo.css";


export function ContenedorConteo(props) {
  return (
    <div className="ConteoPrincipal">
      <div className='ContenedorIzq'>
        <div className="circle"></div> {/* Contenido del círculo */}
        <p className="ContenedorIzq-titulo">HORARIO:<br />{props.horario}</p>
        <p className="ContenedorIzq-descripcion">Inicio: 8:00 a.m.</p>
      </div>
      <div className="contenedores-principal">
        <div className="contenedor-restantes">
          <p className="contenedor-texto-restantes">TICKETS <br />RESTANTES</p>
          <p className="contenedor-cantidad-restantes">{props.num1}</p>
        </div>
      </div>
    </div>
  );
}

export function ContenedorTiempo(props) {
  return (
    <div className="contenedortiempoPequeno">
      <p className="contenedor-restante-tiempo"> Tiempo restante en llegar a 0 </p>
      <p className="contenedor-numero-tiempo">{props.num2}</p>
    </div>
  );
}

