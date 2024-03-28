import React from 'react'
import s from './Choose.module.css'
import { Container, Grid, Typography } from '@mui/material'

const Choose = () => {
    return (
        <section className={s.choose_section} style={{ backgroundImage: 'url(/images/trace.png)' }}>
            <img src='/images/ChooseCar.png' className={s.choose_img}></img>
            <Container className={s.choose_container} maxWidth={false} sx={{}}>
                <Grid container justifyContent={'space-around'} spacing={5} >
                    <Grid item className={s.left_side} xs={12} sm={12} md={12} lg={6} xl={6} sx={{textAlign:{xs:'center'}}} direction={'column'}>
                        <h4>
                            Почему вы должны выбрать нас?
                        </h4>
                        <Typography variant={'h3'} sx={{fontWeight:600,fontFamily:'var(--poppins)'}}>
                            Самые лучшие условия, которые вы когда-либо видели
                        </Typography>
                        <p>
                            Откройте для себя лучшие предложения, с
                            нашими непревзойденными ценами. Мы стремимся предоставить вам лучшее
                            соотношение цены и качества, чтобы вы могли наслаждаться высококачественными
                            услугами и продуктами, не тратя денег. Наши предложения созданы для того, чтобы
                            предоставить вам незабываемые впечатления от поездок, поэтому не упустите шанс сэкономить.
                        </p>
                        <a>Узнать больше</a>
                    </Grid>
                    <Grid item className={s.right_side} rowGap={4} xs={12} sm={12} md={12} lg={6} direction={'column'} xl={6} sx={{marginTop:{md:10,sm:10,xs:10,lg:0,xl:0}}}>
                        <Grid container sx={{direction:{xs:'column'}}} className={s.right_box} >
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
                        </Grid>
                        <Grid container className={s.right_box} sx={{direction:{xs:'column'}}}>
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
                        </Grid>
                        <Grid container className={s.right_box} sx={{direction:{xs:'column'}}}>
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
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Choose