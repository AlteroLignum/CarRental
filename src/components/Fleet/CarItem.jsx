import React from 'react'
import s from './Fleet.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Stack } from '@mui/material'


const CarItem = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.array.models)
    

    
    const chooseMachine = (e) =>{
        dispatch({type:'CHOOSE', payload:e.value})
        dispatch({type:'CHOOSE_ID',payload:e.id})
    }

    return (
        <>
            <Stack sx={{width:'80%',marginX:'auto'}} gap={2}>
                {
                    cash.map( (item,index) => {
                        return (
                            <div className={s.cash} key={index} onClick={(e) => chooseMachine(e.target)} value={item} id={index}>
                                {item}
                            </div>)
                    })
                }
            </Stack>
        </>
    )
}

export default CarItem