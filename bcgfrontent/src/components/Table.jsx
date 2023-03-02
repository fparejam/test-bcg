import React from "react";
import TableRow from "./TableRow";

function Table({ data, handleEdit }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <TableRow key={row.id} row={row} handleEdit={handleEdit} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
