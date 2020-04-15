import React from "react";
import { Icon, Table} from 'semantic-ui-react'
// import TableFilter from 'react-table-filter';
// import DropdownSelect from "../../dropdown/index.jsx";

export default function EmployeeTable(props) {
    return (
        <Table celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell filterkey="index">Index</Table.HeaderCell>
                    <Table.HeaderCell filterkey="salary"><button
                            onClick={() => props.sortBy("salary")} className="ui small green button"
                        >Salary<Icon className="angle double down"/></button></Table.HeaderCell>
                    <Table.HeaderCell filterkey="first name">
                        First Name
                    </Table.HeaderCell>
                    <Table.HeaderCell filterkey="last name">Last Name</Table.HeaderCell>
                    <Table.HeaderCell filterkey="company">Company</Table.HeaderCell>
                    <Table.HeaderCell filterkey="email">Email</Table.HeaderCell>
                    <Table.HeaderCell filterkey="phone">Phone</Table.HeaderCell>
                    <Table.HeaderCell filterkey="address">Address</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    props.data.map(row => (
                        <Table.Row>
                            <Table.Cell>{row.index}</Table.Cell>
                            <Table.Cell>{row.salary}</Table.Cell>
                            <Table.Cell>{row.name.first}</Table.Cell>
                            <Table.Cell>{row.name.last}</Table.Cell>
                            <Table.Cell>{row.company}</Table.Cell>
                            <Table.Cell>{row.email}</Table.Cell>
                            <Table.Cell>{row.phone}</Table.Cell>
                            <Table.Cell>{row.address}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}