import React from 'react'
import s from './MainAbout.module.css'
import { Box, Container, Grid, Typography } from '@mui/material'

const MainAbout = () => {
    return (
        <>
            <div className={s.main_about}>
                <Container className={s.about_container} disableGutters>
                    <Grid container direction='row' justifyContent={'center'} rowSpacing={6}>
                        <Grid item xs={12} sm={12} md={12} lg={6} justifyItems={'center'}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src='/images/about-main.jpg' className={s.about_mainImage} alt='error' ></img>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Container sx={{textAlign:{xs:'center',sm:'center',md:'center',lg:'left'}}} maxWidth={'md'}>
                                <Typography variant='h4' sx={{fontFamily:'var(--rubik)',fontWeight: 600}}>О нашей компании</Typography>
                                <Typography variant='h3' sx={{fontFamily:'var(--rubik)',fontWeight: 500}}>Вы заводите машину и ваше путешествие начинается</Typography>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptatem enim, doloremque deserunt recusandae accusantium,
                                    delectus aliquam vero atque cumque voluptas animi earum dicta?
                                    Iusto totam aliquam id dicta asperiores molestiae.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.

                                </p>
                                <Grid container className={s.about_icons} justifyContent={'space-around'} columnGap={4} xs={12}  md={12} textAlign={'center'}>
                                    <Grid item className={s.icons_box} xs={12} sm={12} md={12} lg={4} textAlign={'center'} alignItems={'center'} justifyContent={'center'}>
                                        <img src='/images/icon1.png' alt='error'></img>
                                        <Grid container textAlign={'center'} justifyContent={'center'} columnGap={4} direction={'column'} sx={{marginBottom: 4}}>
                                            <Typography variant='h4' sx={{fontWeight:600,fontSize:70}}>20</Typography>
                                            <p>Марок машин</p>
                                        </Grid>
                                    </Grid>
                                    <Grid item className={s.icons_box} xs={12}  md={12} lg={4}>
                                        <img src='/images/icon2.png' alt='error'></img>
                                        
                                        <Grid container textAlign={'center'} justifyContent={'center'} columnGap={4} direction={'column'} sx={{marginBottom:4}}>
                                            <Typography variant='h4' sx={{fontWeight:600,fontSize:70}}>40</Typography>
                                            <p>Офисов для аренды</p>
                                        </Grid>
                                    </Grid>
                                    <Grid item className={s.icons_box} xs={12}  md={12} lg={4}>
                                        <img src='/images/icon3.png' alt='error'></img>
                                        
                                        <Grid container textAlign={'center'} justifyContent={'center'} columnGap={4} direction={'column'}>
                                            <Typography variant='h4' sx={{fontWeight:600,fontSize:70}}>75</Typography>
                                            <p>Автомастерских</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default MainAbout