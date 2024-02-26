import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import "../stylesheets/Contacto.css";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

export default function Contacto({ props }) {
  const [emailError, setEmailError] = useState(false);

  function handleEnviarCorreo(e) {
    e.preventDefault();

    // Validar el formato del correo electrónico
    const emailInput = document.getElementById("correo");
    const emailValue = emailInput.value.trim().toLowerCase();
    if (
      !emailValue.endsWith("@hotmail.com") &&
      !emailValue.endsWith("@gmail.com")
    ) {
      setEmailError(true);
      return;
    }

    // Enviar el formulario si pasa la validación
    document.getElementById("contact-form").submit();
  }

  return (
    <div id="contacto" className="contenedor-contacto">
      <h2> {props.titulo} </h2>
      <ul className="lista-datos">
        <li>
          <strong>
            <IoMdMail /> {props.tabla[0]}:{" "}
          </strong>
          germilagger@hotmail.com
        </li>
        <li>
          <strong>
            <FaLocationDot /> {props.tabla[1]}:{" "}
          </strong>
          Santa Fe, Argentina.
        </li>
        <li>
          <strong>
            <FaPhone /> {props.tabla[2]}:{" "}
          </strong>
          +54 9 342 5285858
        </li>
      </ul>
      <form
        className="contenedor-form"
        id="contact-form"
        action="https://formspree.io/f/xwkgodkn"
        method="POST"
        onSubmit={handleEnviarCorreo}
      >
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder={props.placeholder[0]}
          required
        />
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder={props.placeholder[1]}
          required
        />
        {emailError && alert(props.emailCheck)}
        <input
          type="text"
          id="asunto"
          name="asunto"
          placeholder={props.placeholder[2]}
          required
        />
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          cols="25"
          placeholder={props.placeholder[3]}
          required
        ></textarea>
        <button className="boton-enviar" type="submit" id="form_btn">
          {" "}
          <IoIosSend className="icono-del-boton" /> {props.botonSubmit}{" "}
        </button>
      </form>
    </div>
  );
}
