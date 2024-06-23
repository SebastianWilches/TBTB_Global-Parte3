import React from 'react'

export const TableUsers = ({dataUsers}) => {
    return (
        <table className=''>
            <thead>
                <tr className=''>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {dataUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
