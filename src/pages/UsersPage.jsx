import React, { useEffect, useState } from 'react'

export const UsersPage = () => {
    const urlBase = 'https://jsonplaceholder.typicode.com/users';
    const [loading, setLoading] = useState(true);
    const [dataUsers, setDataUsers] = useState([]);


    useEffect(() => {
        //Hacer el llamado a la API apenas se cargue la página
        GET_Users();
    }, [])

    const GET_Users = async () => {
        const response = await fetch(`${urlBase}`);
        const dataUsers = await response.json();

        //Almacenar la info y cambiar el render condicional del cargando
        setDataUsers(dataUsers);
        setLoading(false);
    }

    return (
        <div>
            UsersPage
        </div>
    )
}
