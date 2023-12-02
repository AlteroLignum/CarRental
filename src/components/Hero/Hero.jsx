import React from 'react'
import s from './Hero.module.css'

const Hero = () => {
  return (
    <>
      <section className={s.container}>

        <div className={s.hero_content}>
          <div className={s.hero_text}>
            <h4>Запланируйте ваше путешествие прямо сейчас</h4>
            <h1>Сэкономьте <span>деньги</span> арендуя автомобиль у нас</h1>
            <p>Арендуйте машину вашей мечты. Приемлемые цены, безграничные возможности, гибкие условия аренды и многое другое.</p>
            <div className={s.hero_buttons}>
              <a href='/' className={s.book_ride} onClick={(e) => e.preventDefault()}>Заказать машину</a>
              <a className={s.learn_more}>Узнать больше</a>
            </div>
          </div>
          <img src='/images/main-car.png' className={s.main_car} alt='It is a big car'></img>
        </div>

        <img src='/images/hero-bg.png' className={s.background} alt='It is too big car to display here'></img>
      </section>

    </>
  )
}

export default Hero