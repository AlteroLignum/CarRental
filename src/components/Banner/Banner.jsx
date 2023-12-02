import React from 'react'
import s from './Banner.module.css'

const Banner = () => {
  return (
    <section className={s.banner_section}>
        <div className={s.banner_container}>
            <div className={s.banner_item}>
                <h2>Получайте постоянную поддержку, где бы вы не находились!</h2>
                <p>Помощь при авариях, неожиданных ситуациях и трудностях на дороге</p>
            </div>
        </div>
    </section>
  )
}

export default Banner