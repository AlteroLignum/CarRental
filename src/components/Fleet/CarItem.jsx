import React from 'react'
import s from './Fleet.module.css'
import { useDispatch, useSelector } from 'react-redux'


const CarItem = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.array.models)


    
    const chooseMachine = (e) =>{
        dispatch({type:'CHOOSE', payload:e.value})
        dispatch({type:'CHOOSE_ID',payload:e.id})
    }

    return (
        <>
            <div className={s.car_models}>
                {
                    
                    cash.map( (item,index) => {
                        return (
                            <button className={s.cash} onClick={(e) => chooseMachine(e.target)} value={item} id={index}>
                                {item}
                            </button>)
                    })
                }
            </div>
        </>
    )
}

export default CarItem