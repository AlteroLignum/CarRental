import React from 'react'
import s from '../Booking/Book.module.css'
import { Box, Container, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'black'
                }
            }

        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    fontSize: 42
                }
            }
        }
    },

})

const Modal = ({ message, setMessage, carImg, carName, firstDate, lastDate, pickUp, dropOff, setGetProposal }) => {

    const handleModal = (e) => {
        setGetProposal(true)
        setMessage(false)
        const input = document.querySelectorAll('input')
        input.forEach(item => item.value = '')

    }


    return (
        <>
            <div className={message === false ? s.hide : s.modal_container}>
                <Container className={s.modal_body} disableGutters maxWidth={'xl'}>
                    <div className={s.modal_title}>
                        Подтвердите ваш заказ
                        <CloseIcon onClick={(e) => handleModal()}></CloseIcon>
                    </div>
                    <Grid container direction={'column'} >
                        <Grid item sx={{ backgroundColor: '#ffeae6' }}>
                            <Container maxWidth={'xl'} sx={{ paddingY: 5 }}>
                                <Typography variant='h4' sx={{ color: '#ff4d30', fontWeight: 700 }}>
                                    <ErrorIcon sx={{ color: '#ff4d30', marginRight: 2 }} fontSize='large' ></ErrorIcon>
                                    После подтверждения заказа вы получите:</Typography>
                                <Typography variant='h5' sx={{
                                    color: '#777',
                                    fontWeight: 500,
                                    paddingY: 2,
                                    fontFamily: 'var(--poppins)'
                                }}>
                                    Договор аренды, который необходимо предъявить по прибытии в пункт проката, а также номер бесплатной техподдержки.
                                </Typography>
                            </Container>
                        </Grid>


                        <Container className={s.personal_info} maxWidth='xl'>
                            <Grid container>
                                <ThemeProvider theme={theme}>
                                    <Grid item className={s.modal_info} md={12} sm={12} xs={12} lg={6} xl={6}>
                                        <Typography variant='h5'>Машина - {carName}</Typography>
                                        <Typography variant='h5'>Дата начала аренды - {firstDate}</Typography>
                                        <Typography variant='h5'>Дата окончания аренды - {lastDate}</Typography>
                                        <Typography variant='h5'>Где вы получите машину - {pickUp}</Typography>
                                        <Typography variant='h5'>Где вы оставите машину - {dropOff}</Typography>
                                        <Box className={s.personal_data}>
                                            <Typography variant='h4' sx={{ textTransform: 'uppercase', fontWeight: 600 , marginTop:5}}>Введите ваши данные</Typography>
                                            <Grid container sx={{ marginTop: 4 }} gap={4} >
                                                <TextField type='text' className={s.person} size='large' InputProps={{
                                                    style: { fontSize: '26px' }
                                                }} placeholder='Введите ваше имя...'></TextField>
                                                <TextField type='text' className={s.person} InputProps={{
                                                    style: { fontSize: '26px' }
                                                }} placeholder='Введите вашу фамилию...'></TextField>
                                                <TextField type='text' className={s.person} InputProps={{
                                                    style: { fontSize: '26px' }
                                                }} placeholder='Введите ваш номер...'></TextField>
                                                <TextField type='text' className={s.person_email} sx={{marginBottom:4}} InputProps={{
                                                    style: { fontSize: '26px' }
                                                }} placeholder='Введите вашу почту...'></TextField>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid item className={s.modal_image} md={12} sm={12} xs={12} lg={6} xl={6}>
                                        <img src={carImg} alt='Cool car' className=''></img>
                                        <button className={s.confirmation} onClick={handleModal}>Заказать машину</button>
                                    </Grid>
                                </ThemeProvider>
                            </Grid>
                        </Container>


                    </Grid>
                </Container>
                <div className={s.overlay} onClick={e => setMessage(false)}>Hello</div>
            </div>

        </>
    )
}

export default Modal