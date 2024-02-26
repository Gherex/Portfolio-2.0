import React, { useState, useEffect } from "react";
import "./App.css";
import BarraNavegacion from "./components/BarraNavegacion";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Portafolio from "./components/Portafolio";
import Contacto from "./components/Contacto";
import info from "./data.json";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function App() {
  // Obtener el estado inicial del idioma y darkMode desde localStorage
  const initialIngles = JSON.parse(localStorage.getItem("ingles")) || false;
  const initialDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

  const [datos, setDatos] = useState(
    initialIngles ? info.english : info.spanish
  );
  const [ingles, setIngles] = useState(initialIngles);
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    localStorage.setItem("ingles", JSON.stringify(ingles));
    if (ingles) {
      setDatos(info.english);
    } else {
      setDatos(info.spanish);
    }
  }, [ingles]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    const root = document.documentElement;
    root.style.setProperty("--azul-4", darkMode ? "#e3f1f7" : "#021d2c");
    root.style.setProperty("--azul-3", darkMode ? "#65a3c5" : "#084362");
    root.style.setProperty("--azul-2", darkMode ? "#084362" : "#65a3c5");
    root.style.setProperty("--azul-1", darkMode ? "#021d2c" : "#e3f1f7");
    root.style.setProperty("--amarillo", darkMode ? "#fafdb8bc" : "#fafdb8");
    root.style.setProperty("--blanco", darkMode ? "#000" : "#fff");
    root.style.setProperty("--negro", darkMode ? "#fff" : "#000");
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickIdioma = () => {
    setIngles((estadoPrevio) => !estadoPrevio);
  };

  const handleClickDarkMode = () => {
    setDarkMode((estadoPrevio) => !estadoPrevio);
  };

  return (
    <div className="App">
      <BarraNavegacion
        props={datos.botonNav}
        ids={datos.botonNavID}
        handleClickIdioma={handleClickIdioma}
        handleClickDarkMode={handleClickDarkMode}
        scrollASeccion={scrollToSection}
      />
      <div className="cuerpo-App">
        <Inicio props={datos.inicio} />
        <SobreMi props={datos.sobreMi} />
        <Portafolio props={datos.portafolio} />
        <Contacto props={datos.contacto} />
      </div>
      <footer className="contenedor-footer">
        <div className="contenedor-iconos">
          <a
            href="https://www.linkedin.com/in/germanlagger/"
            target="_blank"
            draggable="false"
          >
            <FaLinkedin className="icono-linkedin" />
          </a>
          <a href="https://github.com/Gherex" target="_blank" draggable="false">
            <FaGithubSquare className="icono-github" />
          </a>
        </div>
        <h3> {datos.footerTexto} </h3>
      </footer>
    </div>
  );
}
