import React from 'react'
import s from './Fleet.module.css'
import CarItem from './CarItem'
import CarImage from './CarImage'
import CarTable from './CarTable'

const Fleet = () => {
  return (
    <>
    <section className={s.pick_section}>
        <div className={s.pick_container}>
            <div className={s.pick_title}>
                <h3>Модельный ряд</h3>
                <h2>Наш автомобильный парк</h2>
                <p>Выберите автомобиль из нашей большой коллекции для путешествия или бизнес поездки</p>
            </div>
            <div className={s.fleet}>
                <CarItem/>
                <CarImage/>
                <CarTable/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Fleet