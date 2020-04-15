import React from 'react';
// import logo from './logo.svg';
import EmployeeTable from "./components/employee-table/index.jsx";
import { Header, Icon } from 'semantic-ui-react'
import './App.css';
import DropdownSelect from "./components/dropdown/index.jsx";

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
    // this.handleClick = this.handleClick.bind(this);
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
        <Icon color="purple" className="group" size="massive" alt="logo"/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header as='h1'>Employee Directory</Header>
        <EmployeeTable
          data={this.state.data}
          sortBy={this.sortBy}
        />
        {/* <DropdownSelect/> */}
      </div>
    );

  }



}

export default App;
