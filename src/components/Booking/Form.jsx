import React, { useEffect, useState } from 'react'
import s from './Book.module.css'
import { Button, Grid, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const theme = createTheme({
    components: {
        // Name of the component
        MuiMenuItem: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: 26,
                },
            },
        },
        MuiInputLabel:{
            styleOverrides:{
                root:{
                    color:'black'
                }
            }
        }
    },
});

const Form = ({ setMessage, message, photo, setPhoto, setFirstTime, setLastTime, setPickUp, setDropOff, getProposal, setGetProposal }) => {

    const [firstDate, setFirstDate] = useState('')
    const [lastDate, setLastDate] = useState('')
    const [error, setError] = useState(false)

    function handleClick(e) {
        e.preventDefault()
        if (firstDate === '' || lastDate === '') {
            setError(true)
        } else {
            setMessage(!message)
            setError(false)
            setGetProposal(false)
            setFirstDate('')
            setLastDate('')
        }
    }
    const enterFirstDate = (e) => {
        setFirstDate(e.target.value)
        setFirstTime(e.target.value)
    }
    const enterLastDate = (e) => {
        setLastDate(e.target.value)
        setLastTime(e.target.value)
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={getProposal === false ? s.hide : s.success}>
                    <p >Проверьте вашу почту для подтверждения заказа.</p>
                </div>
                <div className={error === true ? s.error : s.hide}>
                    <p>Необходимо ввести все данные!</p>
                </div>


                <Grid container className={s.form} spacing={3} justifyContent={'center'} alignItems={'end'}>
                    <Grid item className={s.form_order} xs={12} sm={12} md={6} lg={4} xl={4}>
                        <InputLabel id='mark' sx={{ fontSize: 26 }} shrink={false} >
                            <DirectionsCarIcon sx={{ color: '#ff4d30', marginRight: 3 }} fontSize='lg'></DirectionsCarIcon>
                            Выберите марку вашей машины
                            <b>*</b>
                        </InputLabel>
                        <Select defaultValue={'Audi'} labelId='mark' sx={{ fontSize: 26 }} fullWidth onChange={e => setPhoto(e.target.value)}>
                            <MenuItem value='Audi'>Audi R8</MenuItem>
                            <MenuItem value='Kia'>Kia Sportage</MenuItem>
                            <MenuItem value='Lexus'>Lexus RX</MenuItem>
                            <MenuItem value='BMW'>BMW X6</MenuItem>
                            <MenuItem value='Mazda'>Mazda CX-9</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item className={s.form_order} xs={12} sm={12} md={6} lg={4} xl={4}>
                       
                        <InputLabel id='mark1' sx={{ fontSize: 26 }} shrink={false} >
                            <LocationOnIcon sx={{ color: '#ff4d30', marginRight: 3 }} fontSize='lg'></LocationOnIcon>
                            Где вы хотите забрать машину?
                            <b>*</b>
                        </InputLabel>
                        <Select defaultValue={'Москва'} labelId='mark1' sx={{ fontSize: 26 }} fullWidth  onChange={e => setPickUp(e.target.value)}>
                            <MenuItem value='Москва'>Москва</MenuItem>
                            <MenuItem value='Санкт-Петербург'>Санкт Петербург</MenuItem>
                            <MenuItem value='Самара'>Самара</MenuItem>
                            <MenuItem value='Белгород'>Белгород</MenuItem>
                            <MenuItem value='Казань'>Казань</MenuItem>
                            <MenuItem value='Нижний Новгород'>Нижний Новгород</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item className={s.form_order} xs={12} sm={12} md={6} lg={4} xl={4}>
                        <InputLabel id='mark2' sx={{ fontSize: 26 }} shrink={false} >
                            <LocationOnIcon sx={{ color: '#ff4d30', marginRight: 3 }} fontSize='lg'></LocationOnIcon>
                            Где вы хотите оставить машину?
                            <b>*</b>
                        </InputLabel>
                        <Select defaultValue={'Москва'} labelId='mark2' sx={{ fontSize: 26 }} fullWidth onChange={e => setDropOff(e.target.value)}>
                            <MenuItem value='Москва'>Москва</MenuItem>
                            <MenuItem value='Санкт-Петербург'>Санкт Петербург</MenuItem>
                            <MenuItem value='Самара'>Самара</MenuItem>
                            <MenuItem value='Белгород'>Белгород</MenuItem>
                            <MenuItem value='Казань'>Казань</MenuItem>
                            <MenuItem value='Нижний Новгород'>Нижний Новгород</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item className={s.form_order} xs={12} sm={12} md={6} lg={4} xl={4}>
                        
                        <InputLabel  sx={{ fontSize: 26 }} shrink={false} >
                            <CalendarMonthIcon sx={{ color: '#ff4d30', marginRight: 3 }} fontSize='lg'></CalendarMonthIcon>
                            Дата начала аренды
                            <b>*</b>
                        </InputLabel>
                        <input type='date' id='mark3' style={{width:'100%'}} value={firstDate} onChange={e => enterFirstDate(e)}></input>
                        
                    </Grid>
                    <Grid item className={s.form_order} xs={12} sm={12} md={6} lg={4} xl={4}>
                        
                        <InputLabel  sx={{ fontSize: 26 }} shrink={false} >
                            <CalendarMonthIcon sx={{ color: '#ff4d30', marginRight: 3 }} fontSize='lg'></CalendarMonthIcon>
                            Дата окончания аренды
                            <b>*</b>
                        </InputLabel>
                        <input type='date' value={lastDate} id='mark4' style={{width:'100%'}} onChange={e => enterLastDate(e)}></input>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} marginTop={{sm:4}}>
                        <button type='submit' style={{width:'100%'}} className={s.search} onClick={e => handleClick(e)}>Поиск</button>
                    </Grid>

                </Grid>
            </ThemeProvider>
        </>
    )
}

export default Form