module.exports = {
  plugins: {
    tailwindcss: {}, 
    // Esta línea configura el plugin tailwindcss. 
    //El objeto vacío {} indica que no se están configurando opciones 
    //adicionales para este plugin. El plugin tailwindcss es el núcleo de 
    //Tailwind CSS y se encarga de procesar los estilos CSS.
    
    autoprefixer: {}, 
    // Esta línea configura el plugin autoprefixer. 
    //Al igual que con el plugin tailwindcss, el objeto vacío {} 
    //indica que no se están configurando opciones adicionales para este plugin. 
    //El plugin autoprefixer se encarga de agregar prefijos de proveedores a 
    //los estilos CSS para asegurar la compatibilidad con diferentes navegadores.
  },
}

