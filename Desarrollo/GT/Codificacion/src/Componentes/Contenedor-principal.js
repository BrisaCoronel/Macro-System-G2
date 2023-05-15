import React from "react";
import "../Stylesheets/Contenedores.css";


export function Contenedorprincipal(props) {
  return (
    <div className="contenedores">
      <div className='Contenedorizq'>
          <img className='imgizq'
          src={require(`../imagenes/${props.imagen}.png`)}
          alt='Imagen izq'/>
        <div className='contenedorizq-texto'>
        </div>
      </div>
      <div className="contenedores-principal">
       <div className="contenedor-tickets">
          <p className="contenedor-texto-tickets">TICKETS <br/>TOTALES</p>
          <p className="contenedor-cantidad-tickets">{props.num}</p>
       </div>
      </div>
      
    </div>
  );
  
}
export function Contenedorsec(props) {
  return (
    <div className="contenedorpequeno">
      <p href="#" className="contendorpequeno-texto">Ver conteo en tiempo real</p>
    </div>
  );
  
}
export function Header(props) {
  return (
    <header>
      <div id="logo">
        <c href={props.linkUrl}>
          <img className="img"
          src={require(`../imagenes/${props.imagen}.png`)} 
          alt={props.altText} />
        </c>
      </div>
      <nav id="nav">
        <ul>
          <li><a href="#">Historial</a></li>
          <li><a href="#">Geolocalización</a></li>
          <li><b href="#" className="home">Home</b></li>
        </ul>

      </nav>
    </header>
  );
}
export default{
  Contenedorprincipal,
  Header,
  Contenedorsec
}