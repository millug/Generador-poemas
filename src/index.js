import React from "react";
import ReactDOM from "react-dom/client"; // Cambié la importación a 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter
import PoemGenerator from "./PoemGenerator";
import "./styles.css"; // Importamos los estilos

// Crear el root con ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root")); 

// Usar el método 'render' sobre el root
root.render(
    <React.StrictMode>
        {/* Envuelve tu aplicación con BrowserRouter y establece el basename */}
        <BrowserRouter basename="/Generador-poemas">
            <PoemGenerator />
        </BrowserRouter>
    </React.StrictMode>
);