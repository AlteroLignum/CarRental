import React from 'react'
import s from './Download.module.css'
import { Box, Container, Grid } from '@mui/material'

const Download = () => {
  return (
    <section className={s.download} style={{backgroundImage: 'url(/images/bg02.png)'}}>
        <Container className={s.download_container} maxWidth={'lg'} sx={{paddingY:20}}>
            <Grid container className={s.download_content} lg={6} gap={6} xl={6} md={12} sm={12} xs={12} sx={{textAlign:{md:'center',lg:'left',xl:'left',sm:'center',xs:'center'}}} justifyContent={'center'}>
                
                    <h2>
                        Скачайте наше приложение для более удобной аренды
                    </h2>
                    <p>
                        Благодаря нашему приложению вы легко сможете арендовать машину. Оно поможет вам в выборе и 
                        облегчит связь с нами.
                    </p>
                
                <Box gap={3}>
                    <img src='/images/googleapp.svg' alt='error'></img>
                    <img src='/images/appstore.svg' alt='error'></img>
                </Box>
            </Grid>
        </Container>
    </section>
  )
}

export default Download