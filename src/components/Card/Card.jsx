import React from 'react'
import { useApi } from '../../hooks/useApi'
import "./Card.css"


export const Card = ({entity, title}) => {
  const [value] = useApi(entity);

  return (
    <div className='card-container'>
        <div className='card-content'>
            <div className='card-number'>
            <h1>{value}</h1>
            </div>
            <div className='card-title'>
            <p>{title}</p>
            </div>
        </div>
    </div>
  )
}
