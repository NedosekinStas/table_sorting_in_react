import React from 'react';
// import PropTypes from 'prop-types';
import TableItem from './TableItem'


export default function TableList(props) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        { props.table.map(index => {
          return <TableItem index={index} key={index.id}/>
        })}
      </tbody>
    </table>
  )
}
