import React, { useEffect } from "react";

const VistaCV = ({ onClose }) => {
  useEffect(() => {
    const handleWindowClose = () => {
      onClose();
    };

    window.addEventListener("beforeunload", handleWindowClose);

    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, [onClose]);

  return (
    <div>
      {/* Contenido de tu VistaCV */}
    </div>
  );
};

export default VistaCV;
