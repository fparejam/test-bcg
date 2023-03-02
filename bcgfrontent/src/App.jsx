import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import Modal from "./components/Modal";
import "./styles.css";

function App() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  // Obtener datos iniciales de la API
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/data");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Función para la actualización de datos de un usuario
  const handleUpdate = (id, nombre, apellido, email) => {
    fetch(`http://localhost:8000/api/data/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        nombre,
        apellido,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSelectedRow(null);
        fetchData();
      })
      .catch((error) => console.error(error));
  };

  
  // Abrir modal para actualizar un usuario
  const handleEdit = (row) => {
    setSelectedRow(row);
  };

  // Cerrar modal
  const handleClose = () => {
    setSelectedRow(null);
  };

  return (
    <div className="App">
      <h1>Tabla de usuarios</h1>
      <Table data={data} handleEdit={handleEdit} />
      {selectedRow && (
        <Modal
          selectedRow={selectedRow}
          handleClose={handleClose}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default App;
