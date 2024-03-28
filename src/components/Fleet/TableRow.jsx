import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import s from './Fleet.module.css'

const TableRow = () => {


    const currentId = useSelector(state => state.current.currentID)
    const description = useSelector(state => state.array.description)
    
    

    return (
        <>
            {
                description[currentId].map(item => {
                    return (
                        <div className={s.general_table}>
                            <div className={s.table_price}>
                                <span>{item.price} p</span>
                                /в день
                            </div>
                            <div className={s.table_description}>
                                
                                    <div className={s.table_row}><span>Модель</span> <p>{item.name}</p></div>
                                    <div className={s.table_row}><span>Год выпуска</span> <p>{item.year}</p></div>
                                    <div className={s.table_row}><span>Производитель</span> <p>{item.mark}</p></div>
                                    <div className={s.table_row}><span>Кол-во дверей</span> <p>{item.door}</p></div>
                                    <div className={s.table_row}><span>Топливо</span> <p>{item.fuel}</p></div>
                                    <div className={s.table_row}><span>Коробка</span> <p>{item.korob}</p></div>
                                
                            </div>
                        </div>
                    )
                })


            }
        </>
    )
}

export default TableRow