import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import AboutPage from '../components/About/AboutPage'
import BookAbout from './About/BookAbout'
import Testimonials from '../components/Testimonials/Testimonials'

const Testimonial = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({type:'CHANGE',payload:'Отзывы'})
  },[])

  return (
    <div>
      <AboutPage/>
      <Testimonials/>
      <BookAbout/>
    </div>
  )
}

export default Testimonial