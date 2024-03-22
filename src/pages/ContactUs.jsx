import React, { useEffect } from 'react'
import AboutPage from '../components/About/AboutPage'
import { useDispatch } from 'react-redux'
import Contact from '../components/Contact/Contact'

const ContactUs = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({type:'CHANGE',payload:'Связаться с нами'})
  },[])

  return (
    <>
    <AboutPage/>
    <Contact/>
    
    </>
  )  
}

export default ContactUs