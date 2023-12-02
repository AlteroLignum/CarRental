import React from 'react'
import s from './MainAbout.module.css'

const MainAbout = () => {
  return (
    <>
    <div className={s.main_about}>
        <div className={s.about_container}>
            <div className={s.about_image}>
                <img src='/images/about-main.jpg'></img>
            </div>
            <div className={s.about_text}>
                <h3>О нашей компании</h3>
                <h2>Вы заводите машину и ваше путешествие начинается</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatem enim, doloremque deserunt recusandae accusantium, 
                    delectus aliquam vero atque cumque voluptas animi earum dicta?
                     Iusto totam aliquam id dicta asperiores molestiae.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    
                </p>
                <div className={s.about_icons}>
                    <div className={s.icons_box}>
                        <img src='/images/icon1.png'></img>
                        <span>
                            <h4>20</h4>
                            <p>Марок машин</p>
                        </span>
                    </div>
                    <div className={s.icons_box}>
                        <img src='/images/icon2.png'></img>
                        <span>
                            <h4>40</h4>
                            <p>Офисов для аренды</p>
                        </span>
                    </div>
                    <div className={s.icons_box}>
                        <img src='/images/icon3.png'></img>
                        <span>
                            <h4>75</h4>
                            <p>Автомастерских</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainAbout