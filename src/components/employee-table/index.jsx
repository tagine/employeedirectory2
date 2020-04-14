import React from "react";


export default function EmployeeTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th><button
                            onClick={() => props.sortBy("salary")}
                        >Salary</button></th>
                    <th>
                        First Name
                    </th>
                    <th>Last Name</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row => (
                        <tr>
                            <td>{row.index}</td>
                            <td>{row.salary}</td>
                            <td>{row.name.first}</td>
                            <td>{row.name.last}</td>
                            <td>{row.company}</td>
                            <td>{row.email}</td>
                            <td>{row.phone}</td>
                            <td>{row.address}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}