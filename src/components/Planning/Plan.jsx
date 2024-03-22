import React from 'react'
import s from './Plan.module.css'
import { Box, Container, Grid, Typography } from '@mui/material'

const Plan = () => {
  return (
    <>
    <section className={s.planning}>
        <Container className={s.plan_container} maxWidth='lg'>
            <Box className={s.plan_title} >
                <Typography variant='h3' sx={{fontFamily:'var(--rubik)',fontWeight:600}}>Запланируйте ваше путешествие прямо сейчас!</Typography>
                <Typography variant='h2' sx={{fontFamily:'var(--poppins)',fontWeight: 'bold'}}>Быстрая и легкая аренда машины</Typography>
            </Box>
            <Grid container className={s.plan_box} direction={'row'} >
              <Grid item className={s.plan_option} sm={12} md={4}>
                <img src='/images/select.png' alt='select'/>
                <h3>Выберите машину</h3>
                <Typography variant='body1'>Мы предлагаем большой выбор машин для самых требовательных клиентов</Typography>
              </Grid>
              <Grid item className={s.plan_option} sm={12} md={4}>
                <img src='/images/contact.png'alt='contact' />
                <h3>Позвоните оператору</h3>
                <Typography variant='body1'>Наши операторы помогут разобраться со всеми возникшими проблемами и вопросами</Typography>
              </Grid>
              <Grid item className={s.plan_option} sm={12} md={4}>
                <img src='/images/drive.png' alt='drive'/>
                <h3>Безопасность</h3>
                <Typography variant='body1'>Если вы попадете в аварию, мы быстро поможем вам, где бы вы не были</Typography>
              </Grid>
            </Grid>
        </Container>
    </section>
    
    </>
  )
}

export default Plan