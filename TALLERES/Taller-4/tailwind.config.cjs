/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      // Esta sección extiende el tema predeterminado con configuraciones personalizadas.
    
      colors: { 
        // Esta sección define colores personalizados para el proyecto.
    
        primary: { 
          // Esta sección define la paleta de colores primarios.
    
          lightCyan: "hsl(193, 38%, 86%)", 
          // Esta línea define el color lightCyan.
    
          neonGreen: "hsl(150, 100%, 66%)", 
          // Esta línea define el color neonGreen.
    
        }, 
    
        neutral: { 
          // Esta sección define la paleta de colores neutrales.
    
          grayishBlue: "hsl(217, 19%, 38%)", 
          // Esta línea define el color grayishBlue.
    
          darkGrayishBlue: "hsl(217, 19%, 24%)", 
          // Esta línea define el color darkGrayishBlue.
    
          darkBlue: "hsl(218, 23%, 16%)", 
          // Esta línea define el color darkBlue.
    
        }, 
    
      }, 
    
      screens: { 
        // Esta sección define tamaños de pantalla personalizados para estilos responsivos.
    
        md: "768px", 
        // Esta línea define un punto de interrupción llamado md con un ancho de pantalla de 768px.
    
      }, 
    
      shadow:{ 
        // Esta sección define sombras personalizadas para el proyecto.
    
        diceShadow: "0px 0px 15px 5px hsl(150, 100%, 66%)", 
        // Esta línea define una sombra llamada diceShadow con los valores especificados.
    
      }
    
    }, 
  },
  plugins: [],
};
