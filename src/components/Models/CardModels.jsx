import React, { useEffect, useState } from 'react'
import s from './CardModels.module.css'

import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Button, CardContent, CardMedia } from '@mui/material';


const CardModels = ({data}) => {
  
  const [value, setValue] = useState(2);
  
  
  useEffect(() =>{
    let randomNumber = Math.random() * 10;
    randomNumber = Math.round(randomNumber * 2) / 2;
    randomNumber = Math.min(randomNumber, 5);
    setValue(randomNumber)
  },[])

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
            <Box>
              <Rating name="read-only" size='large' value={value} readOnly />
            </Box>
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