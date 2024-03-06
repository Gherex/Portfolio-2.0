import React from "react";
import imgProyecto1 from "../images/hamburgueseria_krusty.png";
import imgProyecto2 from "../images/calculadora.png";
import imgProyecto3 from "../images/anotador.png";
import vidProyecto4 from "../videos/Gameplay-gift.mp4";
import "../stylesheets/Portafolio.css";
import icoHTML from "../images/icons/ico-html.png";
import icoCSS from "../images/icons/ico-css.png";
import icoJS from "../images/icons/ico-js.png";
import icoReact from "../images/icons/ico-react.png"
import icoCPlusPlus from "../images/icons/ico-c++.png";
import icoSFML from "../images/icons/ico-sfml.png";
import { IoOpenOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

export default function Portafolio({ props }) {

  return (
    <div id="portafolio" className="contenedor-portafolio">
      <h2 className="titulo"> {props.titulo} </h2>
      <div className="contenedor-proyectos">


        <div className="proyecto">
          <a className="enlace" href="http://krustyburgers.netlify.app" target="_blank" draggable="false">
            <img className="portada" src={imgProyecto1} alt="Imagen de una pag. web de recetas." draggable="false" />
          </a>
          <p className="descripcion-proyecto"> {props.descripcion[0]} </p>
          <div className="contenedor-lenguajes">
            <img className="icono" src={icoHTML} alt="Icono HTML" draggable="false" />
            <img className="icono" src={icoCSS} alt="Icono CSS" draggable="false" />
            <img className="icono" src={icoJS} alt="Icono JavaScript" draggable="false" />
            <img className="icono" src={icoReact} alt="Icono React" draggable="false" />
          </div>
          <div className="contenedor-iconos">
            <a href="http://krustyburgers.netlify.app" target="_blank" draggable="false"><IoOpenOutline /></a>
            <a href="https://github.com/Gherex/KrustyBurgers" target="_blank" draggable="false"><FaGithubSquare className="icono-github" /></a>
          </div>
        </div>


        <div className="proyecto">
          <a className="enlace" href="https://calculadoradegherex.netlify.app/" target="_blank" draggable="false">
            <img className="portada" src={imgProyecto2} alt="Imagen de una calculadora interactiva." draggable="false" />
          </a>
          <p className="descripcion-proyecto"> {props.descripcion[1]} </p>
          <div className="contenedor-lenguajes">
            <img className="icono" src={icoHTML} alt="Icono HTML" draggable="false" />
            <img className="icono" src={icoCSS} alt="Icono CSS" draggable="false" />
            <img className="icono" src={icoJS} alt="Icono JavaScript" draggable="false" />
          </div>
          <div className="contenedor-iconos">
            <a href="https://calculadoradegherex.netlify.app/" target="_blank" draggable="false"><IoOpenOutline /></a>
            <a href="https://github.com/Gherex/Calculadora" target="_blank" draggable="false"><FaGithubSquare className="icono-github" /></a>
          </div>
        </div>


        <div className="proyecto">
          <a className="enlace" href="https://anotadordegherex.netlify.app/" target="_blank" draggable="false">
            <img className="portada" src={imgProyecto3} alt="Imagen de un anotador de tareas." draggable="false" />
          </a>
          <p className="descripcion-proyecto"> {props.descripcion[2]} </p>
          <div className="contenedor-lenguajes">
            <img className="icono" src={icoHTML} alt="Icono HTML" draggable="false" />
            <img className="icono" src={icoCSS} alt="Icono CSS" draggable="false" />
            <img className="icono" src={icoJS} alt="Icono JavaScript" draggable="false" />
          </div>
          <div className="contenedor-iconos">
            <a href="https://anotadordegherex.netlify.app/" target="_blank" draggable="false"><IoOpenOutline /></a>
            <a href="https://github.com/Gherex/Anotador" target="_blank" draggable="false"><FaGithubSquare className="icono-github" /></a>
          </div>
        </div>


        <div className="proyecto">
          <video className="portada" src={vidProyecto4} type="video/mp4" autoPlay loop muted title="Gameplay de un juego de plataformas 2D." />
          <p className="descripcion-proyecto"> {props.descripcion[3]} </p>
          <div className="contenedor-lenguajes">
            <img class="icono" src={icoCPlusPlus} alt="Icono C++" draggable="false" />
            <img class="icono" src={icoSFML} alt="Icono SFML" draggable="false" />
          </div>
          <div className="contenedor-iconos">
            <a href="https://github.com/Gherex/The-Runner" target="_blank" draggable="false"><FaGithubSquare className="icono-github" /></a>
          </div>
        </div>


      </div>
    </div>
  );

}