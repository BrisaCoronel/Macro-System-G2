import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "../Stylesheets/Historial.css";

export function Historial(props) {
    return (
        <div className="historial">
            <div className="contenedores">
                <div className="contenedor-historial-izq">
                <div className="circle"></div> {/* Contenido del círculo */}
                    <div className="contenedor-izq-head">
                        <p className="contenedor-izq-head-text">Comedor &nbsp;</p>
                        <p className="contenedor-día">{props.date1}</p>
                    </div>
                    <div className="contenedor-izq-imagenes">
                        <img className='imgizq1'
                        src={require(`../imagenes/${props.imagenizq1}.png`)}
                        alt='Imagen izq1'/>
                        <img className='imgcentr1'
                        src={require(`../imagenes/${props.imagencentr1}.png`)}
                        alt='Imagen centr1'/>
                        <img className='imgder1'
                        src={require(`../imagenes/${props.imagender1}.png`)}
                        alt='Imagen der1'/>
                    </div>
                    <div className="contenedor-izq-descripcion">
                        <Link to="/InfoNutricional" className="descripcion-izq-texto-desayuno">Desayuno</Link>
                        <Link to="/InfoNutricional" className="descripcion-izq-texto-almuerzo">Almuerzo</Link>
                        <Link to="/InfoNutricional" className="descripcion-izq-texto-cena">Cena</Link>
                    </div>
                </div>
                <div className="contenedor-historial-der">
                    <div className="contenedor-der-head">
                        <p className="contenedor-der-head-text">Comedor &nbsp;</p>
                        <p className="contenedor-día">{props.date2}</p>
                    </div>
                    <div className="contenedor-der-imagenes">
                        <img className='imgizq2'
                        src={require(`../imagenes/${props.imagenizq2}.png`)}
                        alt='Imagen izq2'/>
                        <img className='imgcentr2'
                        src={require(`../imagenes/${props.imagencentr2}.png`)}
                        alt='Imagen centr2'/>
                        <img className='imgder2'
                        src={require(`../imagenes/${props.imagender2}.png`)}
                        alt='Imagen der2'/>
                    </div>
                    <div className="contenedor-der-descripcion">
                        <Link to="/InfoNutricional" className="descripcion-der-texto-desayuno">Desayuno</Link>
                        <Link to="/InfoNutricional" className="descripcion-der-texto-almuerzo">Almuerzo</Link>
                        <Link to="/InfoNutricional" className="descripcion-der-texto-cena">Cena</Link>
                    </div>
                </div>
            </div>
            <div className="contenedores">
                <div className="contenedor-historial-izq">
                    <div className="contenedor-izq-head">
                        <p className="contenedor-izq-head-text">Comedor &nbsp;</p>
                        <p className="contenedor-día">{props.date3}</p>
                    </div>
                    <div className="contenedor-izq-imagenes">
                        <img className='imgizq3'
                        src={require(`../imagenes/${props.imagenizq3}.png`)}
                        alt='Imagen izq1'/>
                        <img className='imgcentr3'
                        src={require(`../imagenes/${props.imagencentr3}.png`)}
                        alt='Imagen centr1'/>
                        <img className='imgder3'
                        src={require(`../imagenes/${props.imagender3}.png`)}
                        alt='Imagen der3'/>
                    </div>
                    <div className="contenedor-izq-descripcion">
                        <Link to="/InfoNutricional" className="descripcion-izq-texto-desayuno">Desayuno</Link>
                        <Link to="/InfoNutricional" className="descripcion-izq-texto-almuerzo">Almuerzo</Link>
                        <Link to="/InfoNutricional" className="descripcion-izq-texto-cena">Cena</Link>
                    </div>
                </div>
                <div className="contenedor-historial-der">
                    <div className="contenedor-der-head">
                        <p className="contenedor-der-head-text">Comedor &nbsp;</p>
                        <p className="contenedor-día">{props.date4}</p>
                    </div>
                    <div className="contenedor-der-imagenes">
                        <img className='imgizq4'
                        src={require(`../imagenes/${props.imagenizq4}.png`)}
                        alt='Imagen izq4'/>
                        <img className='imgcentr4'
                        src={require(`../imagenes/${props.imagencentr4}.png`)}
                        alt='Imagen centr4'/>
                        <img className='imgder4'
                        src={require(`../imagenes/${props.imagender4}.png`)}
                        alt='Imagen der4'/>
                    </div>
                    <div className="contenedor-der-descripcion">
                        <Link to="/InfoNutricional" className="descripcion-der-texto-desayuno">Desayuno</Link>
                        <Link to="/InfoNutricional" className="descripcion-der-texto-almuerzo">Almuerzo</Link>
                        <Link to="/InfoNutricional" className="descripcion-der-texto-cena">Cena</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
