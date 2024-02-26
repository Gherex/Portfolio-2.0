import React, { useState, useEffect } from "react";
import "../stylesheets/BarraNavegacion.css";
import BotonNav from "./BotonNav";
import BotonIdioma from "./BotonIdioma";
import BotonDarkMode from "./BotonDarkMode";
import gherexLogo from "../images/gherex.png";
import { FaBars } from "react-icons/fa6";

export default function BarraNavegacion({
  props,
  ids,
  handleClickIdioma,
  handleClickDarkMode,
  scrollASeccion,
}) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [mostrarElementos, setMostrarElementos] = useState(true);

  const handleNavButtonClick = (buttonIndex) => {
    setActiveButtonIndex(buttonIndex);
    const sectionId = ids[buttonIndex];
    scrollASeccion(sectionId);
  };

  const toggleMostrarElementos = () => {
    setMostrarElementos(!mostrarElementos);
  };

  useEffect(() => {
    // Función para actualizar el estado de mostrarElementos
    const actualizarEstado = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 800) {
        setMostrarElementos(false);
      } else {
        setMostrarElementos(true);
      }
    };

    // Llama a la función para verificar el ancho de la pantalla al cargar la página
    actualizarEstado();

    // Agrega un event listener para actualizar el estado si cambia el tamaño de la ventana
    window.addEventListener("resize", actualizarEstado);

    // Función de retorno para limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", actualizarEstado);
    };
  }, []);

  return (
    <header className="contenedor-barraNav">
      <div className="logo">
        <img
          className="logo-img"
          src={gherexLogo}
          alt="Gherex Logo"
          draggable="false"
        />
        <span className="logo-text"> GL </span>
      </div>
      <nav className="contenedor-botones" style={mostrarElementos ? {} : { top: '-100px' }}>
        {mostrarElementos &&
          props.map((item, index) => (
            <BotonNav
              key={index}
              isActive={index === activeButtonIndex}
              onClick={() => handleNavButtonClick(index)}
            >
              {item}
            </BotonNav>
          ))}
        <div className="contenedor-sliders">
          {mostrarElementos && <BotonDarkMode onClick={handleClickDarkMode} />}
          {mostrarElementos && <BotonIdioma onClick={handleClickIdioma} />}
        </div>
      </nav>
      <FaBars className="barra" onClick={toggleMostrarElementos} />
    </header>
  );
}
