import React, { useEffect, useState } from 'react'
import s from './Fleet.module.css'
import { useSelector } from 'react-redux'

const CarImage = () => {

  // const currentCar = useSelector(state => state.current.current)
  // console.log(currentCar)
  // const [carImage,setCarImage] = useState('')

  const currentId = useSelector(state => state.current.currentID)
  const description = useSelector(state => state.array.description)
  
  return (
    <div className={s.general_car}>
      <div className={s.car_container}>
          <img src={description[currentId][0].image} alt='error'/>
      </div>
    </div>
  )
}

export default CarImage