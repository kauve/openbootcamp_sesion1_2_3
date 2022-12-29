import React from "react";
import PropTypes from "prop-types";
import ComponenteB from "./componenteB";
import { useState } from "react";

const ComponenteA = () => {
  const [estado, setEstado] = useState(false);

  return (
    <div>
      <ComponenteB
        nombre={"Carlos"}
        apellido={"Hernandez"}
        email="asdsad"
        conectado={estado}
      />
      <button onClick={() => setEstado(estado ? false : true)}></button>
    </div>
  );
};

export default ComponenteA;
