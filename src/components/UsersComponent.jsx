import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { TableUsers } from './TableUsers';
import { GridCardUsers } from './GridCardUsers';
import './UsersComponent.css'

export const UsersComponent = () => {
    const urlBase = 'https://jsonplaceholder.typicode.com/users';
    const [loading, setLoading] = useState(true); //Flag de loading
    const [dataUsers, setDataUsers] = useState([]);
    const [typeSearch, setTypeSearch] = useState('Nombre') //Tipo de busqueda sobre campo
    const [search, setSearch] = useState("") //Input de busqueda
    const [typeView, setTypeView] = useState('Table') //Cambio de vista para la data de users (Table o Card)

    const onSearchInput = (e) => {
        setSearch(e.target.value)
    }

    const onTypeSearch = (e) => {
        setTypeSearch(e.target.value)
    }

    const onTypeView = e => {
        setTypeView(e.target.value)
    }

    // Filtrar la data que viene de la API con un filter, en caso de que este vacio devuelve el original
    let results = []
    switch (typeSearch) {
        case 'Nombre':
            results = !search ? dataUsers : dataUsers.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
            break;
        case 'Email':
            results = !search ? dataUsers : dataUsers.filter((dato) => dato.email.toLowerCase().includes(search.toLocaleLowerCase()))
            break;
        case 'Telefono':
            results = !search ? dataUsers : dataUsers.filter((dato) => dato.phone.toLowerCase().includes(search.toLocaleLowerCase()))
            break;
    }

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
            <h1>Usuarios Aplicación Web</h1>


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
                            <div className="containerTypeView">
                            <h3>🔎 Buscar <input value={search} onChange={onSearchInput} type="text" /></h3>
                            <h3>sobre el campo:</h3>
                                <input
                                    type="radio"
                                    name="typeSearch"
                                    value="Nombre"
                                    id="Nombre"
                                    checked={typeSearch === "Nombre"}
                                    onChange={onTypeSearch}
                                />
                                <label htmlFor="Nombre">Nombre</label>

                                <input
                                    type="radio"
                                    name="typeSearch"
                                    value="Email"
                                    id="Email"
                                    checked={typeSearch === "Email"}
                                    onChange={onTypeSearch}
                                />
                                <label htmlFor="Email">Email</label>

                                <input
                                    type="radio"
                                    name="typeSearch"
                                    value="Telefono"
                                    id="Telefono"
                                    checked={typeSearch === "Telefono"}
                                    onChange={onTypeSearch}
                                />
                                <label htmlFor="Telefono">Telefono</label>
                            </div>


                            <div className='containerTypeView'>
                                <h3>🖼️ Tipo de vista:</h3>
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
                            </div>



                            {/* Renderizado condicional del tipo de vista */}
                            {typeView === 'Table' ? <TableUsers dataUsers={results} /> : <GridCardUsers dataUsers={results} />}
                        </>
                    )

            }
        </div>
    )
}
