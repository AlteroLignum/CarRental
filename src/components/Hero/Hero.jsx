import React from 'react'
import s from './Hero.module.css'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const order={
  
    backgroundColor: '#ff4d30',
    border: '2px solid #ff4d30',
    borderRadius: '0.3rem',
    boxShadow: '0 10px 15px 0 rgba(255,83,48,.35)',
    padding: '1.8rem 3rem',
    transition: ' all .3s',
    color: '#fff',
    fontWeight: 700,
  '&:hover':{
    backgroundColor:'#ff4d30'
  }
}
const knowMore={
  backgroundColor: '#010103',
  border: '2px solid #010103',
  borderRadius: '0.3rem',
  padding: '1.8rem 3rem',
  transition: 'all .3s',
  color: '#fff',
  fontWeight: 700,
  '&:hover':{
    backgroundColor:'#fff',
    color:'#010103'
  }
}

const Hero = () => {
  return (
    <>
      <section className={s.container}>

        

        <Container   maxWidth={false} sx={{marginBottom:10}} >
          <Grid container sx={{height:'fit-content', }} >
              <Box className={s.background} sx={{ display:{xs:'none',sm:'none',md:'none',lg:'flex',xl:'flex'}}} >
                <img src='/images/hero-bg.png' alt='It is too big car to display here'></img>
              </Box>
            <Grid item direction={'column'} xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant='h4' sx={{ fontFamily: 'var(--rubik)',marginTop:20,fontWeight:600 }}>Запланируйте ваше путешествие прямо сейчас</Typography>
              <Typography variant='h3' sx={{ fontFamily: 'var(--poppins)',marginTop:5,fontWeight:600,lineHeight:1 }}>Сэкономьте <Typography component='span' sx={{fontSize:'5rem',color:'#ff4d30',fontWeight:700,lineHeight:.8}}>деньги</Typography> арендуя автомобиль у нас</Typography>
              <Typography variant='body1' sx={{
                color: '#706f7b',
                fontFamily: 'var(--rubik)',
                marginY:5,
                fontWeight: 400
              }}>Арендуйте машину вашей мечты. Приемлемые цены, безграничные возможности, гибкие условия аренды и многое другое.</Typography>
              <Stack className={s.hero_buttons} spacing={2} direction={'row'} sx={{marginBottom:10}}>
                <Button href='/' sx={order} onClick={(e) => e.preventDefault()}>Заказать машину <CheckCircleOutlineIcon></CheckCircleOutlineIcon></Button>
                <Button sx={
                knowMore  
                } >Узнать больше <ChevronRightIcon></ChevronRightIcon></Button>
              </Stack>
            </Grid>
            <Grid item sx={{position:'relative',zIndex:15, display:{xs:'none',sm:'none',md:'none',lg:'flex',xl:'flex'}}} xs={12} sm={12} md={12} lg={6} xl={6}>
              <Box className={s.main_car} sx={{marginTop:20,objectFit:'contain',width:'100%'}}>
                <img src='/images/main-car.png'  alt='It is a big car' className={s.display_car}></img>
              </Box>
            </Grid>
            
          </Grid>
            
        </Container>

      </section>

    </>
  )
}

export default Hero