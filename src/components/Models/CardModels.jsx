import React from 'react'
import s from './CardModels.module.css'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { typography } from '@mui/system';
import { CardActions } from '@mui/material';
const CardModels = ({data}) => {
  
  
  return (
    <>
    < Grid item xs={12} sm={6} md={4} lg={3} >
      <Card >
          <CardMedia
           image={data.image}
           alt={data.name}
           title={data.name}
           component='img'
           height='300'
           sx={{
            width: 400
           }}
          >

          </CardMedia>
          <CardContent>
            <Typography
              variant='h4'
              component='h3'
              sx={{
                fontWeight:'bold'
              }}
            >
              {data.name}
            </Typography>
            <Typography variant='h5' style={{fontSize: 29}}>
              Цена: {data.price} руб.
            </Typography>
          </CardContent>
          <CardActions className={s.card_book} sx={{
            mb:4
          }}>
            <Button className={s.btn_book} variant='contained' color='primary' style={{fontSize: 20}}>
              Забронировать
            </Button>
          </CardActions>
        </Card>
    </Grid>
    
    </>
  )
}

export default CardModels