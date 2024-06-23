import React from 'react'
import userLogo from '../assets/img/logoUser.png'
import './CardUser.css'

export const CardUser = () => {
  return (
    <article className='container-card'>
      <img src={userLogo} alt="Imagen logo card" />
      <div>
        <h3>Leanne Graham</h3>
        <p>📧 Sincere@april.biz</p>
        <p>📱 1-770-736-8031 x56442</p>
        <p>🏠 Kulas Light - Apt. 556</p>
      </div>
    </article>
  )
}
