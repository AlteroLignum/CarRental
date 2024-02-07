import React, { useEffect, useState } from 'react'
import s from './Models.module.css'

import CardModels from './CardModels';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { Container } from '@material-ui/core';
import Container from '@mui/material/Container';



const Models = () => {

  const data = useSelector(state => state.carFromAPI.models)
  
  return (
    <Container maxWidth={false} sx={{maxWidth:'80%'}} >
      <Grid className='card_main' container spacing ={3} mt={4}>
        {data.map(elem =>{
          return <CardModels data={elem} key ={elem.id}/>
        })}
      </Grid>
    </Container>
  )
}

export default Models