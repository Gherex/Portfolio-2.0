import React, { useState, useEffect } from "react";
import "../stylesheets/BotonDarkMode.css";

export default function BotonDarkMode({ onClick }) {
  // Obtener el estado inicial del botón deslizante desde localStorage
  const initialSliderCheckedDark = JSON.parse(localStorage.getItem('sliderCheckedDark')) || false;
  const [sliderCheckedDark, setSliderCheckedDark] = useState(initialSliderCheckedDark);

  useEffect(() => {
    // Actualizar localStorage cuando cambie el estado del botón deslizante
    localStorage.setItem('sliderCheckedDark', JSON.stringify(sliderCheckedDark));
  }, [sliderCheckedDark]);

  const handleSliderChangeDark = () => {
    setSliderCheckedDark(estadoPrevio => !estadoPrevio);
    onClick(); // Llamar a la función onClick pasada como prop para gestionar el estado en el componente principal
  };

  return (
    <div className="boton-deslizante-DM">
      <label className="switch-DM">
        <input type="checkbox" checked={sliderCheckedDark} onChange={handleSliderChangeDark} />
        <span className="slider-DM"></span>
      </label>
    </div>
  );
}
