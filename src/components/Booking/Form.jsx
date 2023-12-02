import React, { useEffect, useState } from 'react'
import s from './Book.module.css'

const Form = ({ setMessage, message ,photo,setPhoto,setFirstTime,setLastTime,setPickUp,setDropOff,getProposal,setGetProposal}) => {
    
    const[firstDate,setFirstDate] = useState('')
    const[lastDate,setLastDate] = useState('')
    const[error,setError] = useState(false)

    function handleClick(e) {
        e.preventDefault()
        if(firstDate==='' || lastDate === ''){
            setError(true)
        }else{
           setMessage(!message) 
           setError(false)
           setGetProposal(false)
           setFirstDate('')
           setLastDate('')
        }
    }
    const enterFirstDate = (e) =>{
        setFirstDate(e.target.value)
        setFirstTime(e.target.value)
    }
    const enterLastDate = (e) =>{
        setLastDate(e.target.value)
        setLastTime(e.target.value)
    }
    
    return (
        <>
            <div  className={getProposal === false ? s.hide : s.success}>
                <p >Проверьте вашу почту для подтверждения заказа.</p>
            </div>
            <div className={error === true ? s.error : s.hide}>
                <p>Необходимо ввести все данные!</p>
            </div>
            
            
            <form className={s.form}>
                <div className={s.form_order}>
                    <label>
                        <i class='fa-solid fa-car'></i>
                        Выберите марку вашей машины
                        <b>*</b>
                    </label>
                    <select onChange={e => setPhoto(e.target.value)}>

                        <option value='Audi'>Audi R8</option>
                        <option value='Kia'>Kia Sportage</option>
                        <option value='Lexus'>Lexus RX</option>
                        <option value='BMW'>BMW X6</option>
                        <option value='Mazda'>Mazda CX-9</option>
                    </select>
                </div>
                <div className={s.form_order}>
                    <label>
                        <i class='fa-solid fa-location-dot'></i>
                        Где вы хотите забрать машину?
                        <b>*</b>
                    </label>
                    <select onChange={e => setPickUp(e.target.value)}>
                        <option value='Москва'>Москва</option>
                        <option value='Санкт-Петербург'>Санкт Петербург</option>
                        <option value='Самара'>Самара</option>
                        <option value='Белгород'>Белгород</option>
                        <option value='Казань'>Казань</option>
                        <option value='Нижний Новгород'>Нижний Новгород</option>
                    </select>
                </div>
                <div className={s.form_order}>
                    <label>
                        <i class='fa-solid fa-location-dot'></i>
                        Где вы хотите оставить машину?
                        <b>*</b>
                    </label>
                    <select onChange={e => setDropOff(e.target.value)}>
                        <option value='Москва'>Москва</option>
                        <option value='Санкт-Петербург'>Санкт Петербург</option>
                        <option value='Самара'>Самара</option>
                        <option value='Белгород'>Белгород</option>
                        <option value='Казань'>Казань</option>
                        <option value='Нижний Новгород'>Нижний Новгород</option>
                    </select>
                </div>
                <div className={s.form_order}>
                    <label>
                        <i class='fa-regular fa-calendar-days'></i>
                        Дата начала аренды
                        <b>*</b>
                    </label>
                    <input type='date' value={firstDate} onChange={e => enterFirstDate(e)}></input>
                </div>
                <div className={s.form_order}>
                    <label>
                        <i class='fa-regular fa-calendar-days'></i>
                        Дата окончания аренды
                        <b>*</b>
                    </label>
                    <input type='date' value={lastDate} onChange={e => enterLastDate(e)}></input>
                </div>
                <button type='submit' className={s.search} onClick={e => handleClick(e)}>Поиск</button>
            </form>
        </>
    )
}

export default Form