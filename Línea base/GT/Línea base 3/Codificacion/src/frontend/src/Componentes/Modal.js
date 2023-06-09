import React from "react";
import styled from 'styled-components';
import "../Stylesheets/Modal.css";
import imagesad from '../imagenes/sad-image.png';

export function Modal ({estado, cambiarEstado}){
    return (
        <div className="VentanaModal">
            {estado && 
                <div className="Overlay">
                    <div className="ContenedorModal">
                        <div className="BotonCerrar" onClick={()=>cambiarEstado(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        <div className="Contenido">
                            <img id='imgSad'
                            src={imagesad}
                            alt="Sin Tickets"/>
                            <h1 className = "tittulo">SE HAN ACABADO<br/>LOS TICKETS</h1>
                            <p className = "parrafo">SUERTE PARA<br/>LA SIGUIENTE!!</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}