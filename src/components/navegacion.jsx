import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Navegacion({ children }) {
    
    const navigate = useNavigate();
    const { state } = useLocation()
    const usuario = state.usuario

    const handleClickUsuarios = e => {
        navigate('/users', {
            replace: true,
            state: {
                auth: state.auth
            }
        });
    }

    const handleClickProductos = e => {
        navigate('/products', {
            replace: true,
            state: {
                auth: state.auth
            }
        });
    }

    const handleClickTags = e => {
        navigate('/tags', {
            replace: true,
            state: {
                auth: state.auth
            }
        });
    }

    const handleClickSalir = e => {
        navigate('/login', {
            replace: true,
            state: {
                auth: false
            }
        });
    }
    
    return (
        <div className="page">
            <div className="navegacion-wrapper">
                <button onClick={handleClickUsuarios}>Usuarios</button>
                <button onClick={handleClickProductos}>Productos</button>
                <button onClick={handleClickTags}>Tags</button>
                <button onClick={handleClickSalir}>Salir</button>
                <p>Hola {usuario}</p>
            </div>
            {children}
        </div>
    )
}