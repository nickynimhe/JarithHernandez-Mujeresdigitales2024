import React from "react";
// Esta línea importa la biblioteca React, que es necesaria para crear componentes de interfaz de usuario.

import ReactDOM from "react-dom/client";
// Esta línea importa la biblioteca ReactDOM, que es necesaria para renderizar componentes de React en el DOM.

import App from "./App";
// Esta línea importa el componente App desde el archivo App.js, que es el componente principal de la aplicación.

import "./index.css";
// Esta línea importa el archivo de estilos CSS index.css, que se utiliza para dar estilo a la aplicación.

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// Esta línea crea un elemento raíz en el DOM utilizando el método createRoot de ReactDOM, 
// y luego renderiza el componente App dentro de ese elemento raíz utilizando el método render. 
// El elemento raíz se encuentra en el archivo index.html y tiene un id de "root".