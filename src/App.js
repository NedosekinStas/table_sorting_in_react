import React, { useEffect } from 'react';
import TableList from './Table/TableList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [table, setTable] = React.useState([]);

  // const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      .then(response => response.json())
      .then(table =>{
        setTable(table)
        // setLoading(false)
      })
  }, [])

  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='container'>
          <div className='row justify-content-center'>
            <h1>Сортировка по столбцам</h1>
          </div>
        <div className='row'>
          <TableList table={table}/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
