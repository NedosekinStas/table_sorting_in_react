import React from 'react';

export default function TableItem({ id,index,firstName,lastName,email,phone }) {
  return (
    <tr>
      <td>{index.id}</td>
      <td>{index.firstName}</td>
      <td>{index.lastName}</td>
      <td>{index.email}</td>
      <td>{index.phone}</td>
    </tr>
  )
}
