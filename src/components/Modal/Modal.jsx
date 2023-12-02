import React from 'react'
import s from '../Booking/Book.module.css'

const Modal = ({message,setMessage,carImg,carName,firstDate,lastDate,pickUp,dropOff,setGetProposal}) => {
    
    const handleModal = (e) =>{
        setGetProposal(true)
        setMessage(false)
        const input = document.querySelectorAll('input')
        input.forEach(item => item.value = '')
    
    }


  return (
    <>
    <div className={message === false ? s.hide :s.modal_container}>
                <div className={s.modal_body}>
                    <div className={s.modal_title}>Подтвердите ваш заказ</div>
                    <div className={s.modal_message}>
                        <h4>
                           <i className='fa-solid fa-circle-info'></i> 
                           После подтверждения заказа вы получите:

                        </h4>
                        <p>
                            Договор аренды, который необходимо предъявить по прибытии в пункт проката, а также номер бесплатной техподдержки.
                        </p>
                        <div className={s.personal_info}>
                            <div className={s.modal_info}>
                                <p>Машина - {carName}</p>
                                <p>Дата начала аренды - {firstDate}</p>
                                <p>Дата окончания аренды - {lastDate}</p>
                                <p>Где вы получите машину - {pickUp}</p>
                                <p>Где вы оставите машину - {dropOff}</p>
                                <div className={s.personal_data}>
                                    <p>Введите ваши данные</p>
                                    <input type='text' className={s.person} placeholder='Введите ваше имя...'></input>
                                    <input type='text' className={s.person} placeholder='Введите вашу фамилию...'></input>
                                    <input type='text' className={s.person} placeholder='Введите ваш номер...'></input>
                                    <input type='text' className={s.person_email} placeholder='Введите вашу почту...'></input>
                                </div>
                            </div>
                            <div className={s.modal_image}>
                                <img src={carImg} alt='Cool car' className=''></img>
                                <button className={s.confirmation} onClick={handleModal}>Заказать машину</button>
                             </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className={s.overlay} onClick={e => setMessage(false)}>Hello</div>
            </div>
    
    </>
  )
}

export default Modal