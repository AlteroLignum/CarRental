import React from 'react'
import s from './Fleet.module.css'
import { useSelector } from 'react-redux'
import TableRow from './TableRow'


const CarTable = () => {
  
  return (
    
      <div className={s.table_container}>
          <TableRow/>
          <div className={s.table_reserve}>
            <a className={s.reserve_link}>Заказать</a>
          </div>
      </div>
    
  )
}

export default CarTable