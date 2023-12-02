import React from 'react'
import s from './Plan.module.css'

const Plan = () => {
  return (
    <>
    <section className={s.planning}>
        <div className={s.plan_container}>
            <div className={s.plan_title}>
                <h3>Запланируйте ваше путешествие прямо сейчас!</h3>
                <h2>Быстрая и легкая аренда машины</h2>
            </div>
            <div className={s.plan_box}>
              <div className={s.plan_option}>
                <img src='/images/select.png' alt='select'/>
                <h3>Выберите машину</h3>
                <p>Мы предлагаем большой выбор машин для самых требовательных клиентов</p>
              </div>
              <div className={s.plan_option} >
                <img src='/images/contact.png'alt='contact' />
                <h3>Позвоните оператору</h3>
                <p>Наши операторы помогут разобраться со всеми возникшими проблемами и вопросами</p>
              </div>
              <div className={s.plan_option}>
                <img src='/images/drive.png' alt='drive'/>
                <h3>Безопасность</h3>
                <p>Если вы попадете в аварию, мы быстро поможем вам, где бы вы не были</p>
              </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Plan