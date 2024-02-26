import React from "react";
import imgGerman from "../images/profile-photo.png";
import "../stylesheets/Inicio.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Inicio({ props }) {

  return (
    <div id="inicio" className="contenedor-inicio">
      <img className="imagen-perfil" src={imgGerman} alt="Foto de German" draggable="false" />
      <h1 className="nombre"> Germán Lagger </h1>
      <h2 className="descripcion"> {props.descripcion} </h2>
      <div className="contenedor-iconos">
        <a href="https://www.linkedin.com/in/germanlagger/" target="_blank" draggable="false"><FaLinkedin className="icono-linkedin" /></a>
        <a href="https://github.com/Gherex" target="_blank" draggable="false"><FaGithubSquare className="icono-github" /></a>
      </div>
    </div>
  );

}