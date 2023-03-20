import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Navegacion } from "./components/navegacion";
import PrivateRoute from "./components/privateRoute";
import { Error404 } from "./pages/error404";
import { Login } from "./pages/login";
import { Productos } from "./pages/productos";
import { Tags } from "./pages/tags";
import { Usuarios } from "./pages/usuarios";

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route exact path="/login" element={
                <>
                    <Login />
                </>
            } />
            <Route exact path="/users" element={
                <PrivateRoute>
                    <Navegacion>
                        <Usuarios/>
                    </Navegacion>
                </PrivateRoute>
            } />
            <Route exact path="/products" element={
                <PrivateRoute>
                    <Navegacion>
                        <Productos/>
                    </Navegacion>
                </PrivateRoute>
            } />
            <Route exact path="/tags" element={
                <PrivateRoute>
                    <Navegacion>
                        <Tags/>
                    </Navegacion>
                </PrivateRoute>
            } />
            <Route exact path="/" element={
                <Navigate to="/login" replace></Navigate>
            } />
            <Route path="*" element={
                <Error404 />
            } />
        </Routes>
    </Router>
);

