import React from 'react'
import s from './Banner.module.css'
import { Container, Grid, Typography } from '@mui/material'

const Banner = () => {
  return (
    <section className={s.banner_section}>
        <Container className={s.banner_container}>
            <Grid container className={s.banner_item}>
                <Typography variant='h4' sx={{color:'white', fontFamily:'var(--poppins)',fontWeight:600}}>Сэкономьте по-крупному с нашим прокатом автомобилей!</Typography>
                <Typography variant='body1' sx={{fontFamily:'var(--poppins)'}}>Помощь при авариях, неожиданных ситуациях и трудностях на дороге</Typography>
            </Grid>
        </Container>
    </section>
  )
}

export default Banner











