import React, { useEffect, useState } from 'react'
import s from './Book.module.css'
import Form from './Form'
import Modal from '../Modal/Modal'
import { Box, Container, Typography } from '@mui/material'
 

const Book = () => {

    const [message, setMessage] = useState(false)
    const [photo, setPhoto] = useState('')
    const [carImg, setCarImg] = useState('')
    const [carName, setCarName] = useState('')
    const [firstDate,setFirstDate] = useState('')
    const [lastDate,setLastDate] = useState('')
    const [pickUp,setPickUp] = useState('Москва')
    const [dropOff,setDropOff] = useState('Москва')
    const[getProposal,setGetProposal] = useState(false)

    


    useEffect(() => {
        switch (photo) {
            case 'Audi':
                setCarImg('/images/Audi.webp')
                setCarName('Audi R8')
                break
            case 'Kia':
                setCarImg('/images/Sportage.jfif')
                setCarName('Kia Sportage')
                break
            case 'Lexus':
                setCarImg('/images/Lexus.jfif')
                setCarName('Lexus RX')
                break
            case 'BMW':
                setCarImg('/images/bmwx6.jpg')
                setCarName('BMW X6')
                break
            case 'Mazda':
                setCarImg('/images/Mazda.jfif')
                setCarName('Mazda CX-9')
                break            
            default:
                setCarImg('/images/Audi.webp')
                setCarName('Audi R8')
        }
    }, [photo])
    

    return (
        <>
            <section className={s.book_container} id='booking_section'>
                <Container className={s.book_item} maxWidth={false}>
                    <Box className={s.book_content} style={{ backgroundImage: 'url(/images/book-bg.png)' }}>
                        <Typography variant='h2' sx={{fontFamily:'var(--poppins)',fontWeight: 600}}>Аренда машины</Typography>
                        <Form 
                        setMessage={setMessage} 
                        message={message} 
                        photo={photo} 
                        setPhoto={setPhoto} 
                        setFirstTime={setFirstDate}
                        setLastTime={setLastDate}
                        setPickUp={setPickUp}
                        setDropOff={setDropOff}
                        getProposal={getProposal}
                        setGetProposal={setGetProposal}
                        />
                    </Box>
                </Container>
                <Modal 
                message={message} 
                setMessage={setMessage} 
                carImg={carImg} 
                carName={carName} 
                firstDate={firstDate}
                lastDate={lastDate}
                pickUp={pickUp}
                dropOff={dropOff}
                setGetProposal={setGetProposal}
                />
            </section>

        </>
    )
}

export default Book