import React from "react";

function TableRow({ row, handleEdit }) {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.nombre}</td>
      <td>{row.apellido}</td>
      <td>{row.email}</td>
      <td>
        <button onClick={() => handleEdit(row)}>Editar</button>
      </td>
    </tr>
  );
}

export default TableRow;
