import React from 'react'
import './TableUsers.css'

export const TableUsers = ({dataUsers}) => {
    return (
        <table className='customTable'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Télefono</th>
                    <th>Dirección</th>
                </tr>
            </thead>
            <tbody>
                {dataUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{`${user.address.street} - ${user.address.suite}`}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
