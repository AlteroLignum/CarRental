import React from 'react'
import s from './Testimonials.module.css'
import { Container, Grid, Typography } from '@mui/material'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Testimonials = () => {
    return (
        <section className={s.testimonials}>
            <ThemeProvider theme={theme}>
                <div className={s.testimonials_container}>
                    <div className={s.testimonials_content}>
                        <Container className={s.testimonials_title} sx={{ marginBottom: 10 }}>
                            <Typography variant='h4'>
                                Проверено людьми и временем
                            </Typography>
                            <Typography variant='h2' sx={{
                                fontFamily: 'var(--poppins)',
                                fontWeight: 700
                            }}>
                                Отзывы клиентов
                            </Typography>
                            <Typography variant='h5' sx={{
                                color: '#706f7b',
                                fontFamily: 'var(--rubik)',

                            }}>
                                Узнайте, какое мнение о нас имеют наши клиенты,
                                прочитав их отзывы. Они уже оценили наши услуги
                                и с радостью поделятся с вами своим положительным опытом.
                            </Typography>
                        </Container>
                        <Container disableGutters maxWidth={false} sx={{ marginTop: 0 }}>
                            <Grid container direction="row"
                                justifyContent="space-around"
                                alignItems="stretch" >
                                <Grid item className={s.testimonials_item} xs={12} lg={5} paddingY={4} sx={{ flexDirection: 'column', marginBottom: 5 }}>
                                    <Typography variant='h5'>
                                        "Машина была в отличном состоянии и сделала нашу поездку еще лучше.
                                        Очень рекомендую этот сайт для аренды автомобиля!"
                                    </Typography>
                                    <div className={s.test_box}>
                                        <img src='/images/willSmith.png' alt='error'></img>
                                        <div className={s.test_name}>
                                            <Typography variant='h4'>Уилл Смит</Typography>
                                            <Typography variant='body1'>Москва</Typography>
                                        </div>
                                    </div>

                                </Grid>
                                <Grid item className={s.testimonials_item} xs={12} lg={5} sx={{ flexDirection: 'column', marginBottom: 5 }}>

                                    <Typography variant='h5'>
                                        "Есть свой сайт, автомобиль можно заказать онлайн. Обслуживают быстро и качественно.
                                        Большой автопарк. Всё просто замечательно."
                                    </Typography>
                                    <div className={s.test_box_second}>
                                        <img src='/images/keanuRivz.webp' alt='error'></img>
                                        <div className={s.test_name}>
                                            <h4>Киану Ривз</h4>
                                            <p>Санкт-Петербург</p>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
            </ThemeProvider>
        </section>
    )
}

export default Testimonials