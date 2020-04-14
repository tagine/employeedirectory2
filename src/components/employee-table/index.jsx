import React from "react";
import { Icon, Table } from 'semantic-ui-react'

export default function EmployeeTable(props) {
    return (
        <Table celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Index</Table.HeaderCell>
                    <Table.HeaderCell><button
                            onClick={() => props.sortBy("salary")} className="ui small green button"
                        >Salary<Icon className="angle double down"/></button></Table.HeaderCell>
                    <Table.HeaderCell>
                        First Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Phone</Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>
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