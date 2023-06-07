import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "../Stylesheets/InfoNutricional.css";

export function ComponenteCommedor(props) {
    return (
        <div className="contenedor-head">
            <p className="contenedor-head-text">Comedor &nbsp;</p>
            <p className="contenedor-día">{props.date}</p>
        </div>
    )
}

export function ComponentePrincipal(props) {
    return (
        <div className="contenedor-principal">
            <div className="circle"></div> 
                <div className="Numeracion">
                    <p className="Numeracion-text">Plato #1</p>
                    <p className="Numeracion-text">Plato #2</p>
                    <p className="Numeracion-text">Plato #3</p>
                </div>
                <div className="contenedor-imagenes">
                    <img className='imgizq'
                    src={require(`../imagenes/${props.imagenizq}.png`)}
                    alt='Imagen izq'/>
                    <img className='imgcentr'
                    src={require(`../imagenes/${props.imagencentr}.png`)}
                    alt='Imagen centr'/>
                    <img className='imgder'
                    src={require(`../imagenes/${props.imagender}.png`)}
                    alt='Imagen der'/>
                </div>
                <div className="contenedor-descripcion">
                    <p ClassName="titulo-izq">Desayuno</p>
                    <p ClassName="descripcion-izq">{props.descripcionizq}</p>
                    <p ClassName="titulo-centr">Almuerzo</p>
                    <p ClassName="descripcion-centr">{props.descripcioncentr}</p>
                    <p ClassName="titulo-der">Cena</p>
                    <p ClassName="descripcion-der">{props.descripcionder}</p>
                </div>
                <div className="contenedor-complementos">
                    <p ClassName="complementos-izq">Complementos:</p>
                    <p ClassName="complementos-izq">{props.complementosizq}</p>
                    <p ClassName="titulo-complementos-centr">Complementos:</p>
                    <p ClassName="complementos-centr">{props.complementoscentr}</p>
                    <p ClassName="titulo-complementos-der">Complementos:</p>
                    <p ClassName="complementos-der">{props.complementosder}</p>
                </div>       
        </div>
    )
}

export function ComponenteNutricional(props) {
    return (
        <div className="contenedor-head">
            <p className="contenedor-head-text">Información Nutricional</p>
        </div>
    )
}

export function ComponentePartes(props) {
    return (
        <div className="ContenedorPartes">
            <div className="componente-desayuno">
                <div className="componente-desayuno-titulo"> 
                    <p className="desayuno-titulo">Desayuno</p>
                </div>
                <div className="componente-desayuno-detalle">
                    <p className="desayuno-detalle">Detalles:</p>
                <div className="componente-desayuno-detalle-caloria"> 
                    <img className='imgcaloria'
                    src={require(`../imagenes/${props.imgcaloria}.png`)}
                    alt='Imgcaloria-izq'/>
                    <p className="desayuno-detalle-caloria">Calorias:</p>
                    <p ClassName="complementos-izq">{props.caloriaizq} Kcal</p>
                </div>
                <div className="componente-desayuno-detalle-grasa"> 
                    <img className='imggrasa'
                    src={require(`../imagenes/${props.imggrasa}.png`)}
                    alt='Imggrasa-izq'/>
                    <p className="desayuno-detalle-grasa">Grasas:</p>
                    <p ClassName="complementos-izq">{props.grasaizq} gr</p>
                </div>
                <div className="componente-desayuno-detalle-proteina"> 
                    <img className='imgproteina'
                    src={require(`../imagenes/${props.imgproteina}.png`)}
                    alt='Imgproteina-izq'/>
                    <p className="desayuno-detalle-proteina">Proteínas:</p>
                    <p ClassName="complementos-izq">{props.proteinaizq} gr</p>
                </div>
                <div className="componente-desayuno-detalle-carbohidrato"> 
                    <img className='imgcarbohidrato'
                    src={require(`../imagenes/${props.imgcarbohidrato}.png`)}
                    alt='Imgcarbohidrato-izq'/>
                    <p className="desayuno-detalle-carbohidrato">Carbohidratos:</p>
                    <p ClassName="complementos-izq">{props.carbohidratoizq} gr</p>
                </div>
            </div>
        </div>
        <div className="componente-almuerzo">
            <div className="componente-almuerzo-titulo"> 
                <p className="almuerzo-titulo">Almuerzo</p>
            </div>
            <div className="componente-almuerzo-detalle">
                <p className="almuerzo-detalle">Detalles:</p>
                <div className="componente-almuerzo-detalle-caloria"> 
                    <img className='imgcaloria'
                    src={require(`../imagenes/${props.imgcaloria}.png`)}
                    alt='Imgcaloria-centr'/>
                    <p className="almuerzo-detalle-caloria">Calorias:</p>
                    <p ClassName="complementos-centr">{props.caloriacentr} Kcal</p>
                </div>
                <div className="componente-almuerzo-detalle-grasa"> 
                    <img className='imggrasa'
                    src={require(`../imagenes/${props.imggrasa}.png`)}
                    alt='Imggrasa-centr'/>
                    <p className="almuerzo-detalle-grasa">Grasas:</p>
                    <p ClassName="complementos-centr">{props.grasacentr} gr</p>
                </div>
                <div className="componente-almuerzo-detalle-proteina"> 
                    <img className='imgproteina'
                    src={require(`../imagenes/${props.imgproteina}.png`)}
                    alt='Imgproteina-centr'/>
                    <p className="almuerzo-detalle-proteina">Proteínas:</p>
                    <p ClassName="complementos-centr">{props.proteinacentr} gr</p>
                </div>
                <div className="componente-almuerzo-detalle-carbohidrato"> 
                    <img className='imgcarbohidrato'
                    src={require(`../imagenes/${props.imgcarbohidrato}.png`)}
                    alt='Imgcarbohidrato-centr'/>
                    <p className="almuerzo-detalle-carbohidrato">Carbohidratos:</p>
                    <p ClassName="complementos-centr">{props.carbohidratocentr} gr</p>
                </div>
            </div>
        </div>
        <div className="componente-cena">
            <div className="componente-cena-titulo"> 
                <p className="cena-titulo">Cena</p>
            </div>
            <div className="componente-cena-detalle">
                <p className="cena-detalle">Detalles:</p>
                <div className="componente-cena-detalle-caloria"> 
                    <img className='imgcaloria'
                    src={require(`../imagenes/${props.imgcaloria}.png`)}
                    alt='Imgcaloria-der'/>
                    <p className="cena-detalle-caloria">Calorias:</p>
                    <p ClassName="complementos-der">{props.caloriader} Kcal</p>
                </div>
                <div className="componente-cena-detalle-grasa"> 
                    <img className='imggrasa'
                    src={require(`../imagenes/${props.imggrasa}.png`)}
                    alt='Imggrasa-der'/>
                    <p className="cena-detalle-grasa">Grasas:</p>
                    <p ClassName="complementos-der">{props.grasader} gr</p>
                </div>
                <div className="componente-cena-detalle-proteina"> 
                    <img className='imgproteina'
                    src={require(`../imagenes/${props.imgproteina}.png`)}
                    alt='Imgproteina-der'/>
                    <p className="cena-detalle-proteina">Proteínas:</p>
                    <p ClassName="complementos-der">{props.proteinader} gr</p>
                </div>
                <div className="componente-cena-detalle-carbohidrato"> 
                    <img className='imgcarbohidrato'
                    src={require(`../imagenes/${props.imgcarbohidrato}.png`)}
                    alt='Imgcarbohidrato-der'/>
                    <p className="cena-detalle-carbohidrato">Carbohidratos:</p>
                    <p ClassName="complementos-der">{props.carbohidratoder} gr</p>
                </div>
            </div>
        </div>
    </div>
       
    )
}