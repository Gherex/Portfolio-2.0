import React from "react";
import "../stylesheets/SobreMi.css";
import { RxPaperPlane } from "react-icons/rx";
import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

export default function SobreMi({ props }) {

  const handleVerCV = () => {
    window.open("CV_GermanLagger.pdf", "_blank");
  };

  const handleDownloadCV = () => {
    // URL del archivo a descargar
    const url = "CV_GermanLagger.pdf";
    // Crear un elemento <a> temporal
    const link = document.createElement("a");
    link.href = url;
    // Establecer el atributo 'download' para indicar que el archivo debe ser descargado
    link.download = "CV_GermanLagger.pdf";
    // Hacer clic en el enlace temporal para iniciar la descarga
    link.click();
  };

  return (
    <div id="sobre-mi" className="contenedor-sobreMi">
      <h2 className="titulo"> {props.titulo} </h2>
      <p className="presentacion">
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {props.presentacionNegrita}{" "}
        </span>
        {props.presentacion}
      </p>
      <div className="contenedor-tablas">
        <div className="tabla1">
          <h3> {props.tabla1.titulo} </h3>
          <ul>
            <li>
              {" "}
              <RxPaperPlane className="icono-flecha" /> {props.tabla1.fila[0]}{" "}
            </li>
            <li>
              {" "}
              <RxPaperPlane className="icono-flecha" /> {props.tabla1.fila[1]}{" "}
            </li>
            <li>
              {" "}
              <RxPaperPlane className="icono-flecha" /> {props.tabla1.fila[2]}{" "}
            </li>
            <li>
              {" "}
              <RxPaperPlane className="icono-flecha" /> {props.tabla1.fila[3]}{" "}
            </li>
            <li>
              {" "}
              <RxPaperPlane className="icono-flecha" /> {props.tabla1.fila[4]}{" "}
            </li>
          </ul>
        </div>
        <div className="tabla2">
          <h3> {props.tabla2.titulo} </h3>
          <ul>
            <li>
              {" "}
              <RxPaperPlane className="icono-flecha" /> {props.tabla2.fila[0]}{" "}
            </li>
            <li>
              {" "}
              <RxPaperPlane className="icono-flecha" /> {props.tabla2.fila[1]}{" "}
            </li>
            <li>
              {" "}
              <RxPaperPlane className="icono-flecha" /> {props.tabla2.fila[2]}{" "}
            </li>
            <li>
              {" "}
              <RxPaperPlane className="icono-flecha" /> {props.tabla2.fila[3]}{" "}
            </li>
            <li>
              {" "}
              <RxPaperPlane className="icono-flecha" /> {props.tabla2.fila[4]}{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="contenedor-botones">
        <button onClick={handleVerCV}>
          {" "}
          {props.botones[0]} <IoOpenOutline className="icono-boton" />{" "}
        </button>
        <button onClick={handleDownloadCV}>
          {" "}
          {
            props.botones[1]
          } <MdOutlineFileDownload className="icono-boton" />{" "}
        </button>
      </div>
    </div>
  );
}