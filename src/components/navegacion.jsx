import React from "react";
import { useNavigate } from "react-router-dom";

export function Navegacion({ children }) {
    
    const navigate = useNavigate();

    const handleClickUsuarios = e => {
        navigate('/users', {
            replace: true,
            state: {
                auth: true
            }
        });
    }

    const handleClickProductos = e => {
        navigate('/products', {
            replace: true,
            state: {
                auth: true
            }
        });
    }

    const handleClickTags = e => {
        navigate('/tags', {
            replace: true,
            state: {
                auth: true
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
            </div>
            {children}
        </div>
    )
}