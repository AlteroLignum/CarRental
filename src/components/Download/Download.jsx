import React from 'react'
import s from './Download.module.css'

const Download = () => {
  return (
    <section className={s.download} style={{backgroundImage: 'url(/images/bg02.png)'}}>
        <div className={s.download_container}>
            <div className={s.download_content}>
                <div className={s.download_text}>
                    <h2>
                        Скачайте наше приложение для более удобной аренды
                    </h2>
                    <p>
                        Благодаря нашему приложению вы легко сможете арендовать машину. Оно поможет вам в выборе и 
                        облегчит связь с нами.
                    </p>
                </div>
                <div className={s.download_image}>
                    <img src='/images/googleapp.svg' alt='error'></img>
                    <img src='/images/appstore.svg' alt='error'></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Download