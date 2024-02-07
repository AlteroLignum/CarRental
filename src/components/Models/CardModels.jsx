import React from 'react'
import s from './CardModels.module.css'
import { Button, CardMedia,CardContent } from '@material-ui/core'
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

const CardModels = ({data}) => {
  
  
  return (
    <>
    < Grid item xs={12} sm={6} md={4} lg={3} >
      <Card style={{height:'100%'}} sx={{ 
    height: "100%",
    display: "flex",
    flexDirection: "column",
  }}>
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
              fontWeightBold
            >
              {data.name}
            </Typography>
            <Typography variant='h5' style={{fontSize: 29}}>
              Цена: {data.price} руб.
            </Typography>
          </CardContent>
          <CardActions className={s.card_book} disableSpacing sx={{
            mb:4,
            mt: "auto" 
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