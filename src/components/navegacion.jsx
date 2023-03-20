import React from "react";
import { useNavigate } from "react-router-dom";

export function Navegacion({ children }) { //Pasar el nombre del usuario como prop o en un context
    
    const navigate = useNavigate();
    const usuario = "Usuario" //Modificar el nombre del usuario aqui

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
                <p>Hola + {usuario}</p>
            </div>
            {children}
        </div>
    )
}