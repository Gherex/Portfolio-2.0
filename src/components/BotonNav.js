import React from "react";
import "../stylesheets/BotonNav.css"

export default function BotonNav({ isActive, onClick, children }) {
  return (
    <div className={`boton-nav ${isActive ? 'active' : ''}`} onClick={onClick}>
      {children}
    </div>
  );
}