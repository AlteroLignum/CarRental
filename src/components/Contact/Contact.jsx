import React from 'react'
import { Box, Button, Container, FormControl, FormLabel, Grid, TextField, Typography } from '@mui/material'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

let theme = createTheme({
  typography: {
    fontSize: 14
  },
  palette: {
    primary: {
      main: '#ff4d30'
    }
  },
  overrides: {
    MuiInputBase: {
      input: {
        fontSize: '24'
      },
    },
  },
});

theme = responsiveFontSizes(theme);


const Contact = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundImage: "url('images/bg-contact.png')",
            backgroundPosition: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            height: 'fit-content',
            width: '100%'
          }}
        >
          <Container sx={{ height: '100%', display: 'flex', width: '90%' }} disableGutters maxWidth={false}>
            <Grid container>
              <Grid item sx={{ width: '50%', fontFamily: 'var(--poppins)' }} md={6} sm={12} xs={12}>
                <Typography variant='h2' fontFamily={'var(--poppins)'} fontWeight={700} my={5}>Нужна дополнительная информация?</Typography>
                <Typography variant='h5'>Многогранные профессионалы, обладающие опытом в различных областях исследований и разработок,
                  а также специалисты по обучению. Более 15 лет опыта.</Typography>
                <Box my={5} fontSize={64}>
                  <Box sx={{ display: 'flex' }} fontSize={20}>
                    <PhoneOutlinedIcon fontSize='large'></PhoneOutlinedIcon>
                    <Typography fontSize={24} ml={2}>(123) 456-789</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <EmailOutlinedIcon fontSize='large'></EmailOutlinedIcon>
                    <Typography fontSize={24} ml={2}>carGlider@carmail.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <LocationSearchingOutlinedIcon fontSize='large'></LocationSearchingOutlinedIcon>
                    <Typography fontSize={24} ml={2}>Russia</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid sx={{ width: '50%' }} md={6} sm={12} xs={12}>
                <FormControl>
                  <Grid container spacing={1} mt={15}>
                    <Grid xs={12} sm={6} item >
                      <TextField label='Введите ваше имя' placeholder='Введите ваше имя' fullWidth required variant='outlined' InputProps={{
                        style: { fontSize: '24px' }
                      }} InputLabelProps={{
                        style: { fontSize: '20px' }
                      }}></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item >
                      <TextField label='Введите вашу фамилию' placeholder='Введите вашу фамилию' fullWidth required variant='outlined' InputProps={{
                        style: { fontSize: '24px' }
                      }} InputLabelProps={{
                        style: { fontSize: '20px' }
                      }}></TextField>
                    </Grid>
                    <Grid xs={12} item >
                      <TextField label='Введите ваш номер' placeholder='Введите ваш номер' fullWidth required variant='outlined' InputProps={{
                        style: { fontSize: '24px' }
                      }} InputLabelProps={{
                        style: { fontSize: '20px' }
                      }}></TextField>
                    </Grid>
                    <Grid xs={12} item >
                      <TextField label='Введите ваш запрос' multiline rows={8} placeholder='Введите ваш запрос' fullWidth required variant='outlined' InputProps={{
                        style: { fontSize: '24px' }
                      }} InputLabelProps={{
                        style: { fontSize: '20px' }
                      }}></TextField>
                    </Grid>
                    <Grid xs={12} item >
                      <Button type='submit' variant='contained' fullWidth color='primary' style={{ height: '80px', fontSize: '20px' }}>
                        <DraftsOutlinedIcon fontSize='lg'></DraftsOutlinedIcon>
                        Отправить
                      </Button>
                    </Grid>

                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
          </Container>

        </Box>
      </ThemeProvider>
    </>
  )
}

export default Contact