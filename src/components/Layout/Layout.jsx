import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import s from './Layout.module.css'
import concat from 'classnames'
import { Container, Dialog, DialogContent, DialogTitle, Grid, Icon, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Layout = () => {
    const [open,setOpen] = useState(false)

    const openChange = () =>{
        setOpen(true)
    }
    const closeChange = () =>{
        setOpen(false)
    }

    return (
        <>
            <header>
                <Container disableGutters maxWidth={false}>
                    <Grid container alignItems={'center'} justifyContent={'space-between'}>
                        <Grid item className={s.logo} style={{ backgroundImage: 'url(/images/logo.png)' }}>

                        </Grid>
                        <Grid item className={s.link_list} sx={{display:{xs:'none',lg:'flex'}}}>
                            <Link to='/'>Главная</Link>
                            <Link to='/models'>Модельный ряд</Link>
                            <Link to='/testimonials'>Отзывы</Link>
                            <Link to='/about'>О нас</Link>
                            <Link to='/contact'>Связаться с нами</Link>
                        </Grid>
                        <Grid item className={s.registration} sx={{display:{xs:'none',lg:'flex'}}}>
                            <a className={s.signin} href='/' onClick={(e) => e.preventDefault()}>Войти</a>
                            <a href='/' className={s.register} onClick={(e) => e.preventDefault()}>Регистрация</a>
                        </Grid>
                        <Grid item sx={{display:{xs:'flex',lg:'none'}}}>
                            <IconButton size='large'>
                                <MenuIcon onClick={openChange}></MenuIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
                <Dialog open={open} onClose={closeChange} fullScreen>
                    <DialogTitle textAlign={'right'}>
                        <IconButton edge="end" size='large'>
                            <CloseIcon onClick={closeChange}></CloseIcon>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container direction='column' justifyContent={'space-between'} sx={{height:'80%',textAlign:'center',fontSize:'30px',fontWeight:'700'}}>
                            
                                <Link to='/'onClick={closeChange}>Главная</Link>
                                <Link to='/models'onClick={closeChange}>Модельный ряд</Link>
                                <Link to='/testimonials'onClick={closeChange}>Отзывы</Link>
                                <Link to='/about'onClick={closeChange}>О нас</Link>
                                <Link to='/contact'onClick={closeChange}>Связаться с нами</Link>
                               
                        </Grid>
                    </DialogContent>
                    
                </Dialog>
            </header>
            <Outlet />
            <footer>
                <Container className={s.footer_container}  maxWidth={false}>
                    
                    <Grid container className={s.footer_lists} columnSpacing={{xs: 6,md:3}} rowSpacing={{xs:5,md:4}}>
                        <Grid item className={concat(s.footer_description,s.footer_line)} xs={12} md={6} lg={3}>
                            <p><span>Urban</span>Glider</p>
                            <p>
                            Мы предлагаем большой выбор транспортных средств для самых требовательных
                            клиентов. У нас есть идеальный автомобиль, отвечающий вашим потребностям.
                            </p>
                            <p><i class='fa-solid fa-phone' style={{color: '#2d2f34'}}></i> +7 (012) 345 67 89</p>
                            <p><i class='fa-solid fa-envelope' style={{color:'#2d2f34'}}></i>
                                urbanGlider@gmail.com
                            </p>
                        </Grid>
                        <Grid item className={concat(s.footer_company,s.footer_line)} xs={12} md={6} lg={3}>
                            <p>Компания</p>
                            <p>Москва</p>
                            <p>Вакансии</p>
                            <p>Блог</p>
                            <p>Как мы работаем</p>
                        </Grid>
                        <Grid item className={concat(s.footer_hours,s.footer_line)} xs={12} md={6} lg={3}>
                            <p>Рабочие часы</p>
                            <p>Пн - пт: 9:00 - 21:00</p>
                            <p>Суббота: 9:00 - 19:00</p>
                            <p>Воскресенье: выходной</p>
                        </Grid>
                        <Grid item className={concat(s.footer_subscription,s.footer_line)} xs={12} md={6} lg={3}>
                            <p>Новости</p>
                            <p>Подпишитесь на нашу рассылку, для получения последних новостей и обновлений.</p>
                            <input type='text'></input>
                            <button>Отправить</button>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </>
    )
}

export { Layout }