import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';  // Importa el archivo App.jsx sin necesidad de extensión

ReactDOM.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);
