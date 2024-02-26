import React, { useState, useEffect } from "react";
import "../stylesheets/BotonIdioma.css";

export default function BotonIdioma({ onClick }) {
  // Obtener el estado inicial del botón deslizante desde localStorage
  const initialSliderCheckedIdioma = JSON.parse(localStorage.getItem('sliderCheckedIdioma')) || false;
  const [sliderCheckedIdioma, setSliderCheckedIdioma] = useState(initialSliderCheckedIdioma);

  useEffect(() => {
    // Actualizar localStorage cuando cambie el estado del botón deslizante
    localStorage.setItem('sliderCheckedIdioma', JSON.stringify(sliderCheckedIdioma));
  }, [sliderCheckedIdioma]);

  const handleSliderChangeIdioma = () => {
    setSliderCheckedIdioma(estadoPrevio => !estadoPrevio);
    onClick(); // Llamar a la función onClick pasada como prop para gestionar el estado en el componente principal
  };

  return (
    <div className="boton-deslizante-lan">
      <label className="switch-lan">
        <input type="checkbox" checked={sliderCheckedIdioma} onChange={handleSliderChangeIdioma} />
        <span className="slider-lan"></span>
      </label>
    </div>
  );
}
