import React from 'react'
import s from './AboutPage.module.css'
import { useDispatch,useSelector } from 'react-redux'

const AboutPage = () => {
  
  
  const list = useSelector(state => state.currentList.list)
   
  return (
    <section className={s.heroes}>
      <div className={s.about_container} style={{backgroundImage:'url(/images/heroes-bg.png)'}}>
        <div className={s.about_overlay} ></div>
        <div className={s.about_text}>
          <h3>{list}</h3>
          <p>
            <a href='/'>Главная </a> 
             / {list}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage