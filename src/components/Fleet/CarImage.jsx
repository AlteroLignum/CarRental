import React, { useEffect, useState } from 'react'
import s from './Fleet.module.css'
import { useSelector } from 'react-redux'

const CarImage = () => {

  const currentCar = useSelector(state => state.current.current)
  const [carImage,setCarImage] = useState('')

  useEffect(() =>{
    
    switch(currentCar){
      case 'Audi R8':
        setCarImage('/images/Audi.webp')
        break
      case 'Kia Sportage':
        setCarImage('/images/Sportage.jfif')
        break
      case 'Lexus RX':
        setCarImage('/images/Lexus.jfif')
        break
      case 'BMW X6':
        setCarImage('/images/BMW.jfif')
        break
      case 'Mazda CX-9':
        setCarImage('/images/Mazda.jfif')
        break
      default:
        setCarImage('/images/Audi.jfif')
        break
    }
  },[currentCar])
  return (
    <div className={s.general_car}>
      <div className={s.car_container}>
          <img src={carImage} alt='error'/>
      </div>
    </div>
  )
}

export default CarImage