import React from 'react'
import s from './BookAbout.module.css'
import Box from '@mui/system/Box';
import { Container, Typography } from '@mui/material';
import { Grid } from '@material-ui/core';
import CallRoundedIcon from '@mui/icons-material/CallRounded';              


const BookAbout = () => {
  return (
    <>
    <Container maxWidth={false} disableGutters>
      <Box sx={{
        height:250,
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
            bgcolor: 'rgba(0,0,0,0.7)',
            zIndex:5,
            height:'100%',
            width:'100%',
          }}>
            <Grid container direction="row"
              justifyContent="center"
              alignItems="center" 
              >
              <Grid item>
                  <Typography variant='h4' component='h3' sx={{color:'white'}}>Забронируйте автомобиль, связавшись с нами</Typography>
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
    {/* <div className={s.book_about} style={{backgroundImage:'url(/images/book-banner.png)'}}>
        <div className={s.book_overlay} >

        </div>
        <div className={s.book_container}>
            <div className={s.book_text}>
                <h2>Забронируйте автомобиль, связавшись с нами</h2>
                <span>
                    <i class="fa-solid fa-phone" style={{color: '#ff4d30'}}></i>
                    <h3>(123) 456-7890</h3>
                </span>
            </div>
        </div>
    </div> */}
    
    </>
  )
}

export default BookAbout