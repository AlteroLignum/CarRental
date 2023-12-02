import React from 'react'
import s from './BookAbout.module.css'

const BookAbout = () => {
  return (
    <>
    <div className={s.book_about} style={{backgroundImage:'url(/images/book-banner.png)'}}>
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
    </div>
    
    </>
  )
}

export default BookAbout