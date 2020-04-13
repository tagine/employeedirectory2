import React from "react";


export default function EmployeeTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Balance</th>
                    <th>Name</th>
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
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}