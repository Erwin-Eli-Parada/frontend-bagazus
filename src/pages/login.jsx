import React from "react";
import { useNavigate } from "react-router-dom";
import verificar from "../functions/verificar";
import "../styles/login.css"


export function Login(props){
    
    const navigate = useNavigate();
    let usuario,password;

    const handleChangeUsuario = (e)=> {
        usuario=e.target.value;
    }

    const handleChangePassword = (e)=> {
        password=e.target.value
    }

    const handleSubmit = async(e)=> {
        e.preventDefault();
        await verificar(usuario,password, navigate)
    }

    return(
        <div className="login">
            <form className="login-container" onSubmit={handleSubmit}>
                <h1>Bienvenido al control de de chips de Bagazus</h1>
                <input type="email" className="input" placeholder="Correo" onChange={handleChangeUsuario} required/>
                <input type="password" className="input" placeholder="Contraseña"onChange={handleChangePassword} required/>
                <input type="submit" value="Login" className="submit"/>
            </form>
        </div>
    )
}