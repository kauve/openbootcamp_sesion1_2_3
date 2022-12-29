import React from "react";

function ComponenteB({ nombre, apellido, email, conectado }) {
  return (
    <div>
      <h1>Nombre: {nombre}</h1>
      <h1>Apellido: {apellido}</h1>
      <h1>Email: {email}</h1>
      <h1>Conectado: {conectado ? "Contacto en Linea" : "Contacto No Disponible"}</h1>
    </div>
  );
}

export default ComponenteB;
