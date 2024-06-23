import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { TableUsers } from './TableUsers';
import { GridCardUsers } from './GridCardUsers';

export const UsersComponent = () => {
    const urlBase = 'https://jsonplaceholder.typicode.com/users';
    const [loading, setLoading] = useState(true); //Flag de loading
    const [dataUsers, setDataUsers] = useState([]);
    const [search, setSearch] = useState("") //Input de busqueda
    const [typeView, setTypeView] = useState('Table') //Cambio de vista para la data de users

    const onSearchInput = (e) => {
        setSearch(e.target.value)
    }

    const onTypeView = e => {
        setTypeView(e.target.value)
    }

    // Filtrar la data que viene de la API con un filter, en caso de que este vacio devuelve el original
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
            <input value={search} onChange={onSearchInput} type="text" />
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
                            <input
                                type="radio"
                                name="typeView"
                                value="Table"
                                id="Table"
                                checked={typeView === "Table"}
                                onChange={onTypeView}
                            />
                            <label htmlFor="Table">Table</label>

                            <input
                                type="radio"
                                name="typeView"
                                value="Card"
                                id="Card"
                                checked={typeView === "Card"}
                                onChange={onTypeView}
                            />
                            <label htmlFor="Card">Card</label>


                            {/* Renderizado condicional del tipo de vista */}
                            {typeView === 'Table' ? <TableUsers dataUsers={results} /> : <GridCardUsers dataUsers={results} />}
                        </>
                    )

            }
        </div>
    )
}
