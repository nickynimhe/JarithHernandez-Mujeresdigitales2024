import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import patternDesktop from "../assets/pattern-divider-desktop.svg";
import patternMobile from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";
import { API_URL } from "../util/api";
import { motion } from "framer-motion";

const Card = () => {

  //Esta línea define un componente funcional llamado Card. 

  const [id, setId] = useState(0);
  // Esta línea utiliza el hook useState de React para crear un estado llamado id, 
  // que se inicializa en 0, y una función setId para actualizar ese estado.

  const [advice, setAdvice] = useState("");
  // Esta línea utiliza el hook useState de React para crear un estado llamado advice, 
  // que se inicializa en una cadena vacía, y una función setAdvice para actualizar ese estado.

  const generateAdvice = () => {
    // Esta línea define una función llamada generateAdvice.

    fetch(API_URL)
      // Esta línea utiliza la función fetch para hacer una solicitud GET a la URL de la API definida en API_URL.

      .then((res) => res.json())
      // Esta línea procesa la respuesta de la API y la convierte en un objeto JSON.

      .then((data) => {
        setId(data.slip.id);
        setAdvice(data.slip.advice);
      })
      // Esta línea actualiza los estados id y advice con los valores obtenidos de la API.

      .catch((err) => console.log(err));
      // Esta línea captura cualquier error que ocurra durante la solicitud y lo registra en la consola.

  };

  useEffect(() => {
    generateAdvice();
  }, []);
  // Esta línea utiliza el hook useEffect de React para ejecutar la función generateAdvice cuando el componente se monta.

  return (
    // Esta línea comienza el retorno del componente Card.

    <motion.div
      // Esta línea crea un elemento div que contendrá el contenido del componente Card, 
      // utilizando la biblioteca de animaciones Framer Motion.

      initial={{
        opacity: 0,
        translateX: -500,
      }}
      // Esta línea define el estado inicial de la animación.

      animate={{
        opacity: 1,
        translateX: 0,
      }}

      /*Esta línea define el estado final de la animación. */

      transition={{
        delay: 0.5,
        x: { duration: 1 },
        default: { ease: "linear" },
      }}

      /*Esta línea define la transición entre el estado inicial y final. */

      whileHover={{
        translateY: 20,
        transition: { duration: 0.3 },
      }}

      /*Esta línea define la animación que se produce cuando el usuario pasa el mouse sobre el elemento. */

      id="card"

      className="bg-neutral-darkGrayishBlue cursor-pointer flex flex-col justify-center w-[90%] h-[350px] md:w-[500px] md:h-[320px] px-[20px] py-[40px] text-center rounded-xl shadow-xl relative"
      /* Esta línea asigna estilos CSS al elemento div.*/
    >

      <p className="mb-4 uppercase tracking-[4px] text-primary-neonGreen text-[14px]">
        Advice #{id} <br /> JARITH HERNANDEZ
      </p>

      {/* Esta línea renderiza un párrafo que muestra el número de consejo actual.*/}

      <div className="advice">

        <FontAwesomeIcon
          className="text-primary-lightCyan -translate-y-2"
          icon={faQuoteLeft}
        />

      {/*Esta línea renderiza un icono de comillas izquierdas. */}

        <span className="text-[28px] font-[800] text-primary-lightCyan">
          {advice}
        </span>
  
      {/*Esta línea renderiza el consejo actual. */}

        <FontAwesomeIcon
          className="text-primary-lightCyan -translate-y-2"
          icon={faQuoteRight}
        />

      {/*Esta línea renderiza un icono de comillas derechas. */}
      </div>


      <img
        className="mt-6 hidden md:block mx-auto"
        src={patternDesktop}
        alt="pattern-image"
      />

    {/*Esta línea renderiza una imagen de patrón para la versión de escritorio. */}

      <img
        className="mt-6 md:hidden mx-auto"
        src={patternMobile}
        alt="pattern-image"
      />

    {/*Esta línea renderiza una imagen de patrón para la versión móvil. */}

      <button
        onClick={generateAdvice}
        // Esta línea asigna la función generateAdvice al evento de clic del botón.
        className="absolute left-[50%] -translate-x-[50%] -bottom-[28px] md:-bottom-[25px] bg-primary-neonGreen w-[65px] h-[65px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-[0_0_20px_1px_rgba(82,255,168,1)]"
      >
        <img
          className="w-[25px] md:w-[20px] animate-spin"
          src={dice}
          alt="dice"
        />
      </button>
    </motion.div>
  );
};

export default Card;
