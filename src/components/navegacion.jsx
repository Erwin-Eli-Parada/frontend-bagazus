import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/navegacion.css"

export function Navegacion({ children }) {
    
    const navigate = useNavigate();
    const { state } = useLocation()
    const usuario = state.usuario

    const handleClickUsuarios = e => {
        navigate('/users', {
            replace: true,
            state: {
                auth: state.auth,
                usuario: state.usuario,
                token: state.token,
                role: state.role
            }
        });
    }

    const handleClickProductos = e => {
        navigate('/products', {
            replace: true,
            state: {
                auth: state.auth,
                usuario: state.usuario,
                token: state.token,
                role: state.role
            }
        });
    }

    const handleClickTags = e => {
        navigate('/tags', {
            replace: true,
            state: {
                auth: state.auth,
                usuario: state.usuario,
                token: state.token,
                role: state.role
            }
        });
    }

    const handleClickSalir = e => {
        navigate('/login', {
            replace: true,
            state: {
                auth: state.auth,
                usuario: state.usuario,
                token: state.token,
                role: state.role
            }
        });
    }
    
    return (
        <div className="page">
            <div className="navegacion-wrapper">
                <div className="botones">
                <button className="btn" onClick={handleClickUsuarios}>Usuarios</button>
                <button className="btn" onClick={handleClickProductos}>Productos</button>
                <button className="btn" onClick={handleClickTags}>Tags</button>
                <button className="btn" onClick={handleClickSalir}>Salir</button>
                </div>
                <p className="usuario">Hola {usuario}</p>
            </div>
            {children}
        </div>
    )
}