import React from 'react'
import { CardUser } from './CardUser';
import './GridCardUsers.css'

export const GridCardUsers = ({dataUsers}) => {
  return (
    <div className='gridCardUsers'>
        {
            dataUsers.map((user) => <CardUser dataUser={user}/>)
        }
    </div>
  )
}
