import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ toggleMode, setToggleMode }) => {
  // Esta línea define un componente funcional llamado Toggle, que recibe dos props: toggleMode y setToggleMode.

  return (
    // Esta línea comienza el retorno del componente Toggle.

    <>
      {/*Esta línea crea un fragmento que contiene el contenido del componente Toggle.*/}

      <label
        className="inline-flex relative -translate-y-[100px] md:-translate-y-[150px] items-center cursor-pointer"
      >
        {/*Esta línea crea un elemento label que contiene el toggle switch.*/}

        <input
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        {/*Esta línea crea un input de tipo checkbox que se utiliza para controlar el estado del toggle switch.
        La clase sr-only oculta el input para que no sea visible, y la clase peer se utiliza para establecer la relación entre el input y el div que se utiliza como toggle switch.*/}

        <div
          onClick={() => setToggleMode((prev) => !prev)}
          className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-primary-lightCyan rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-neonGreen"
        ></div>
        {/*Esta línea crea un div que se utiliza como toggle switch.
         El evento onClick se utiliza para cambiar el estado del toggleMode cuando se hace clic en el div.
         La función setToggleMode se utiliza para actualizar el estado del toggleMode.
         Las clases CSS se utilizan para dar estilo al toggle switch y controlar su apariencia en diferentes estados.*/}

        <span
          className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {/*Esta línea crea un span que contiene el texto o icono que se muestra junto al toggle switch.*/}

          {toggleMode ? (
            <FontAwesomeIcon
              className="text-neutral-darkBlue"
              size="xl"
              icon={faSun}
            />
          ) : (
            <FontAwesomeIcon
              className="text-primary-lightCyan"
              size="xl"
              icon={faMoon}
            />
          )}
          {/*Esta línea utiliza un condicional para mostrar un icono de sol o luna dependiendo del estado del toggleMode.
           Los iconos se muestran en diferentes colores y tamaños dependiendo del estado del toggleMode.*/}

        </span>
      </label>
    </>
  );
};

export default Toggle;
