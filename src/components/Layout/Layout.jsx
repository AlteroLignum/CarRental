import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import s from './Layout.module.css'
import concat from 'classnames'

const Layout = () => {
    return (
        <>
            <header>
                <div className={s.logo} style={{ backgroundImage: 'url(/images/logo.png)' }}>

                </div>
                <div className={s.link_list}>
                    <Link to='/'>Главная</Link>
                    <Link to='/models'>Модельный ряд</Link>
                    <Link to='/testimonials'>Отзывы</Link>
                    <Link to='/about'>О нас</Link>
                    <Link to='/contact'>Связаться с нами</Link>
                </div>
                <div className={s.registration}>
                    <a className={s.signin} href='/' onClick={(e) => e.preventDefault()}>Войти</a>
                    <a href='/' className={s.register} onClick={(e) => e.preventDefault()}>Регистрация</a>
                </div>
            </header>
            <Outlet />
            <footer>
                <div className={s.footer_container}>
                    <div className={s.footer_lists}>
                        <div className={concat(s.footer_description,s.footer_line)}>
                            <p><span>Urban</span>Glider</p>
                            <p>
                            Мы предлагаем большой выбор транспортных средств для самых требовательных
                            клиентов. У нас есть идеальный автомобиль, отвечающий вашим потребностям.
                            </p>
                            <p><i class='fa-solid fa-phone' style={{color: '#2d2f34'}}></i> +7 (012) 345 67 89</p>
                            <p><i class='fa-solid fa-envelope' style={{color:'#2d2f34'}}></i>
                                urbanGlider@gmail.com
                            </p>
                        </div>
                        <div className={concat(s.footer_company,s.footer_line)}>
                            <p>Компания</p>
                            <p>Москва</p>
                            <p>Вакансии</p>
                            <p>Блог</p>
                            <p>Как мы работаем</p>
                        </div>
                        <div className={concat(s.footer_hours,s.footer_line)}>
                            <p>Рабочие часы</p>
                            <p>Пн - пт: 9:00 - 21:00</p>
                            <p>Суббота: 9:00 - 19:00</p>
                            <p>Воскресенье: выходной</p>
                        </div>
                        <div className={concat(s.footer_subscription,s.footer_line)}>
                            <p>Новости</p>
                            <p>Подпишитесь на нашу рассылку, для получения последних новостей и обновлений.</p>
                            <input type='text'></input>
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export { Layout }