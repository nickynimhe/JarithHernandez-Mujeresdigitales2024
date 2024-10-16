import { useState } from "react";
import Card from "./components/Card";
import Toggle from "./components/Toggle";

const App = () => {
  // Esta línea define un componente funcional llamado App.

  const [toggleMode, setToggleMode] = useState(false);
  // Esta línea utiliza el hook useState de React para crear un estado llamado toggleMode, 
  // que se inicializa en false, y una función setToggleMode para actualizar ese estado.

  return (
    // Esta línea comienza el retorno del componente App.

    <div

      className={`${
        toggleMode ? "bg-white" : "bg-neutral-darkBlue"
      } h-[100vh] flex flex-col justify-center items-center`}
      // Esta línea asigna una clase CSS dinámica al elemento div. 
      // La clase se basa en el valor de toggleMode: si es true, se aplica la clase "bg-white", 
      // si es false, se aplica la clase "bg-neutral-darkBlue". 
      // Las demás clases ("h-[100vh] flex flex-col justify-center items-center") se aplican siempre.

      >

      <Toggle toggleMode={toggleMode} setToggleMode={setToggleMode} />
      {/*Esta línea renderiza un componente llamado Toggle */} 
      {/*y le pasa como props el valor actual de toggleMode y la función setToggleMode.*/}

      <Card/>
      {/*Esta línea renderiza un componente llamado Card.*/}

    </div>
  );
};

export default App;
