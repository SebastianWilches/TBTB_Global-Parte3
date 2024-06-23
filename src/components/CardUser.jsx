import React from 'react'
import userLogo from '../assets/img/logoUser.png'
import './CardUser.css'

export const CardUser = ({dataUser}) => {
  return (
    <article className='container-card'>
      <img src={userLogo} alt="Imagen logo card" />
      <div>
        <h3>{dataUser.name}</h3>
        <p>📧 {dataUser.email}</p>
        <p>📱 {dataUser.phone}</p>
        <p>🏠 {`${dataUser.address.city}`}</p>
      </div>
    </article>
  )
}
