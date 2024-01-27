import React, { useEffect, useState } from 'react'
import s from './Models.module.css'
import axios from 'axios'

import CardModels from './CardModels';

const Models = () => {

  const [data,setData] = useState([])
  

  useEffect(() =>{
    if(!data){
      axios.get('https://api.unsplash.com/search/photos?query=cars&client_id=2R1E5z27vGo7bFBNIuMyZZVCeLvL5n7hCqv9lV5GP_Y')
      .then(response =>{
        setData(response)
        
      })
      .catch(error => {
        console.error("Ошибка при запросе к API: ", error)
      })
      
    }
  },[])

  console.log(data)
  
  return (
    <>
    <div className='card_main'>
      {data.map(elem =>{
        <CardModels data={elem}/>
      })}
    </div>
    
    sfasgdaasdg
      
    </>
  )
}

export default Models