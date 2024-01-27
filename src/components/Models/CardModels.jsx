import React from 'react'
import s from './CardModels.module.css'

const CardModels = ({data}) => {
  return (
    <>
    <div className='card_container'>
        <div className='card_name'>{data.id}</div>
    </div>
    </>
  )
}

export default CardModels