import React from 'react'
import s from './Choose.module.css'

const Choose = () => {
  return (
    <section className={s.choose_section} style={{backgroundImage: 'url(/images/trace.png)'}}>
        <img src='/images/ChooseCar.png' className={s.choose_img}></img>
        <div className={s.choose_container}>
            <div className={s.left_side}>
                <h4>
                    Почему вы должны выбрать нас?
                </h4>
                <h2>
                    Самые лучшие условия, которые вы когда-либо видели
                </h2>
                <p>
                Откройте для себя лучшие предложения, с 
                нашими непревзойденными ценами. Мы стремимся предоставить вам лучшее 
                соотношение цены и качества, чтобы вы могли наслаждаться высококачественными 
                услугами и продуктами, не тратя денег. Наши предложения созданы для того, чтобы 
                предоставить вам незабываемые впечатления от поездок, поэтому не упустите шанс сэкономить.
                </p>
                <a>Узнать больше</a>
            </div>
            <div className={s.right_side}>
                <div className={s.right_box}>
                    <img src='/images/CountryCar.png' alt='errror'></img>
                    <div className={s.text_container}>
                        <h4>
                            Путешествия между странами
                        </h4>
                        <p>
                        Поднимите свои впечатления от вождения на новый уровень с 
                        помощью наших первоклассных автомобилей для путешествия между странами.
                        </p>
                    </div>
                </div>
                <div className={s.right_box}>
                    <img src='/images/dollar.png' alt='errror'></img>
                    <div className={s.text_container}>
                        <h4>
                            Услуга "Все включено"
                        </h4>
                        <p>
                        Получите все что вам нужно воспользовавшись только одной услугой. Цена включает
                        в себя все удобства и поддержку в вашем пути.
                        </p>
                    </div>
                </div>
                <div className={s.right_box}>
                    <img src='/images/giving.png' alt='errror'></img>
                    <div className={s.text_container}>
                        <h4>
                            Нет никаких скрытых условий
                        </h4>
                        <p>
                        Наслаждайтесь вашим путешествием и дорогой, не беспокоясь о дополнительных затратах. 
                        Мы верим в честные и прозрачные цены.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Choose