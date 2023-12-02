import React from 'react'
import s from './Testimonials.module.css'

const Testimonials = () => {
  return (
    <section className={s.testimonials}>
        <div className={s.testimonials_container}>
            <div className={s.testimonials_content}>
                <div className={s.testimonials_title}>
                    <h4>
                        Проверено людьми и временем
                    </h4>
                    <h2>
                        Отзывы клиентов
                    </h2>
                    <p>
                        Узнайте, какое мнение о нас имеют наши клиенты, 
                        прочитав их отзывы. Они уже оценили наши услуги
                        и с радостью поделятся с вами своим положительным опытом.
                    </p>
                </div>
                <div className={s.testimonials_box}>
                    <div className={s.testimonials_item}>
                        <span>
                            <i class="fa-solid fa-quote-right"></i>
                        </span>
                        <p>
                        "Машина была в отличном состоянии и сделала нашу поездку еще лучше. 
                        Очень рекомендую этот сайт для аренды автомобиля!"
                        </p>
                        <div className={s.test_box}>
                            <img src='/images/willSmith.png' alt='error'></img>
                            <div className={s.test_name}>
                                <h4>Уилл Смит</h4>
                                <p>Москва</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.testimonials_item}>
                        <span>
                            <i class="fa-solid fa-quote-right"></i>
                        </span>
                        <p>
                        "Есть свой сайт, автомобиль можно заказать онлайн. Обслуживают быстро и качественно. 
                        Большой автопарк. Всё просто замечательно."
                        </p>
                        <div className={s.test_box_second}>
                            <img src='/images/keanuRivz.webp' alt='error'></img>
                            <div className={s.test_name}>
                                <h4>Киану Ривз</h4>
                                <p>Санкт-Петербург</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials