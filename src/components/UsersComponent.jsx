import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { TableUsers } from './TableUsers';
import { GridCardUsers } from './GridCardUsers';

export const UsersComponent = () => {
    const urlBase = 'https://jsonplaceholder.typicode.com/users';
    const [loading, setLoading] = useState(true);
    const [dataUsers, setDataUsers] = useState([]);
    const [search, setSearch] = useState("")

    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(search);
    }

    const results = !search ? dataUsers : dataUsers.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

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
        <div className='containerMain'>
            <input value={search} onChange={searcher} type="text" />
            {
                loading ? (
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#F25252"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                ) :
                    (
                        <>
                            {/* <TableUsers dataUsers={results} /> */}
                            <GridCardUsers dataUsers={results}/>
                        </>
                    )

            }
        </div>
    )
}
