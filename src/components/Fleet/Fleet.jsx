import React from 'react'
import s from './Fleet.module.css'
import CarItem from './CarItem'
import CarImage from './CarImage'
import CarTable from './CarTable'
import { Container, Grid, Typography } from '@mui/material'

const Fleet = () => {
  return (
    <>
    <section className={s.pick_section}>
        <div className={s.pick_container}>
            <div className={s.pick_title}>
                <h3>Модельный ряд</h3>
                <Typography variant='h3' sx={{fontWeight:600,fontFamily:'var(--poppins)'}}>Наш автомобильный парк</Typography>
                <p>Выберите автомобиль из нашей большой коллекции для путешествия или бизнес поездки</p>
            </div>
            <div className={s.fleet}>
              <Container maxWidth={false}>
                <Grid container justifyContent={'space-around'} spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
                    <CarItem/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                    <CarImage/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                    <CarTable/>
                  </Grid>
                </Grid>
                
              </Container>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Fleet