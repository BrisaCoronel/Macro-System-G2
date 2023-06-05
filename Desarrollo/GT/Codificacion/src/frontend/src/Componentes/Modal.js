import React from "react";
import styled from 'styled-components'


const Modal =({estado, cambiarEstado}) =>{
    return (
        <>
            {estado && 
                <Overlay>
                    <ContenedorModal>
                        <BotonCerrar onClick={()=>cambiarEstado(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </BotonCerrar>
                        <Contenido>
                            <h1>SE HAN ACABADO<br/>LOS TICKETS</h1>
                            <p>SUERTE PARA<br/>LA SIGUIENTE!!</p>
                        </Contenido>
                    </ContenedorModal>
                </Overlay>
            }
        </>
    );
}

export default Modal;

const Overlay = styled.div ` 
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div ` 
    width: 40rem;
    min-height: 25rem;
    background: rgba(11,91,116,100);
    position: relative;
    border: 0.4rem solid white;
    padding: 0rem;
`;

const BotonCerrar = styled.button `
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background: none;
    cursor: pointer:
    transition: 0.3s case all;
    border-radius: 0.3rem;
    color: #000;

    &:hover{
        background: rgba(255,255,255,0.2);
    }

    svg{
        width:100%;
        height:100%;
    }
`;

const Contenido = styled.button ` 
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 3rem;
        font-weight: bold;
        margin-left: 5rem;
        margin-bottom: 7rem;
        color: #fff;
    }
    p{
        font-size: 1.5rem;
        font-weight: bold;
        font-style: italic;
        margin-bottom: 1rem;
        color: #fff;
    }
    border: none;
    background: none;
`;