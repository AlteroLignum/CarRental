import React from 'react'
import s from './BookAbout.module.css'
import Box from '@mui/system/Box';
import { Container, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import CallRoundedIcon from '@mui/icons-material/CallRounded';              


const BookAbout = () => {
  return (
    <>
    <Container maxWidth={false} disableGutters>
      <Box sx={{
        height: 270,
        backgroundImage:'url(/images/book-banner.png)',
        bgcolor: 'rgba(0, 0, 0, 0.54)',
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        mt:5,
        backgroundPosition: "center",
        position:'relative',
        }}>
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(45,45,45,0.9)',
            zIndex:5,
            height:'100%',
            width:'100%',
          }}>
            <Grid container direction="row"
              justifyContent="center"
              alignItems="center" 
              sx={{
                height: '100%',
                
              }}
              
              columnGap={10}
              >
              <Grid item>
                  <Typography variant='h4' component='h3' 
                  align='center'
                  sx={{
                    color:'white',
                    fontFamily: 'var(--rubik)',
                    fontWeight: 700
                    }}>Забронируйте автомобиль, связавшись с нами</Typography>
              </Grid>
              <Grid item >
                  <Box sx={{
                    display:'flex',

                  }}>
                    <CallRoundedIcon sx={{color:'#ff4d30',fontSize:50}}/>
                     <Typography variant='h4' component='h3' sx={{color:'#ff4d30',fontWeight:700,fontSize:45}}>(123) 456 78 90</Typography>
                  </Box>
              </Grid>
            </Grid>

          </Box>
      </Box>
    </Container>
    
    
    </>
  )
}

export default BookAbout