import React, { useState } from "react";
function Modal({ selectedRow, handleClose, handleUpdate }) {
  const [nombre, setNombre] = useState(selectedRow.nombre);
  const [apellido, setApellido] = useState(selectedRow.apellido);
  const [email, setEmail] = useState(selectedRow.email);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(selectedRow.id, nombre, apellido, email);
  };

  return (
    <div className="Modal">
      <div className="Modal__overlay" onClick={handleClose}></div>
      <div className="Modal__content">
        <h2>Editar usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="Modal__field">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>
          <div className="Modal__field">
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={handleApellidoChange}
            />
          </div>
          <div className="Modal__field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="Modal__buttons">
            <button type="submit">Guardar</button>
            <button onClick={handleClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
