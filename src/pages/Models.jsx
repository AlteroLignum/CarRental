import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import AboutPage from '../components/About/AboutPage'
import Models from '../components/Models/Models'
import BookAbout from './About/BookAbout'
import Button from '@mui/material'

const Modelas = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({type:'CHANGE',payload:'Модели'})
  },[])

  return (
    <div>
      <AboutPage/>
      <Models/>
      <BookAbout/>
    </div>
  )
}

export default Modelas