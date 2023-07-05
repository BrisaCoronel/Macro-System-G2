import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "../Stylesheets/Contenedores.css";

export function Contenedorprincipal(props) {
  return (
    <div className="contenedores">
      <div className='Contenedorizq'>
        <img className='imgizqC'
          src={require(`../imagenes/${props.imagen}.png`)}
          alt='Imagen izq' />
        <div className='contenedorizq-texto'></div>
      </div>
      <div className="contenedores-principal">
        <div className="contenedor-tickets">
          <p className="contenedor-texto-tickets">TICKETS <br />TOTALES</p>
          <p className="contenedor-cantidad-tickets">{props.num}</p>
        </div>
      </div>
    </div>
  );
}

export function Contenedorsec(props) {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className="contenedorpequeno">
        <Link to="/conteo" className="contendorpequeno-texto">Ver conteo en <br /> tiempo real</Link>
      </div>
    );
  }

  return null;
}

export function Header(props) {
  return (
    <header>
      <div id="logo">
        <Link to={props.linkUrl}>
          <img className="img"
            src={require(`../imagenes/${props.imagen}.png`)}
            alt={props.altText} />
        </Link>
      </div>
      <nav id="nav">
        <ul>
          <li><Link to="/historial">Historial</Link></li>
          <li><Link to="/geolocalizacion">Geolocalización</Link></li>
          <li><Link to="/" className="home">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
}
