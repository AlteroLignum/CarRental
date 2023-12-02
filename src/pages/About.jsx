import React, { useEffect, useState } from 'react'
import AboutPage from '../components/About/AboutPage'
import { useDispatch } from 'react-redux'
import MainAbout from './About/MainAbout'
import Plan from '../components/Planning/Plan'
import BookAbout from './About/BookAbout'

const About = () => {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({type:'CHANGE',payload:'О нас'})
  },[])

  return (
    <div>
      <AboutPage/>
      <MainAbout/>
      <Plan/>
      <BookAbout/>
    </div>
  )
}

export default About