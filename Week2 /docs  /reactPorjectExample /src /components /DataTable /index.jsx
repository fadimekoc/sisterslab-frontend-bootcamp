import React from 'react'

function DataTable({ title, data, text, number }) {
    return (
        <div style={{margin: "20px"}}>
            <h2>{title}</h2>
            <p>{text}</p>
            <p>Number: {number}</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Brand</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody >
                    {data.map(car => (
                        <tr key={phone.id}>
                            <td>{phone.id}</td>
                            <td>{phone.brand}</td>
                            <td>{phone.model}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
