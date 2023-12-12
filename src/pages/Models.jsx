import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import AboutPage from '../components/About/AboutPage'

const Models = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({type:'CHANGE',payload:'Модели'})
  },[])

  return (
    <div>
      <AboutPage/>
      
    </div>
  )
}

export default Models