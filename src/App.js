import React from 'react';
import logo from './logo.svg';
import EmployeeTable from "./components/employee-table/index.jsx";
import './App.css';

import data from "./data/employeedata.json";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        salary: "asc"
      }
    }

    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {
    console.log(key)
    console.log(typeof parseFloat)
    
    this.setState({
      data: data.sort((a, b) => {
      return parseFloat(a[key]) - parseFloat(b[key])
    }) 
    })
  }

  render() {
    return (
      <div className="page-container">
        <img src={logo} className="App-logo" alt="logo" />
        <EmployeeTable
          data={this.state.data}
          sortBy={this.sortBy}
        />
      </div>
    );

  }



}

export default App;
