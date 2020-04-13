import React from 'react';
import logo from './logo.svg';
import EmployeeTable from "./components/employee-table/index.jsx";
import './App.css';

import data from "./data/employeedata.json";

function App() {
  return (
    <div className="page-container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EmployeeTable data={data}></EmployeeTable>
      </header>
    </div>
  );
}

export default App;
