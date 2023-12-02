import React from 'react'
import Hero from '../../components/Hero/Hero'
import Book from '../../components/Booking/Book'
import Plan from '../../components/Planning/Plan'
import Fleet from '../../components/Fleet/Fleet'
import Banner from '../../components/Banner/Banner'
import Choose from '../../components/Choosing/Choose'
import Testimonials from '../../components/Testimonials/Testimonials'
import Download from '../../components/Download/Download'

const Home = () => {
  return (
    <>
    <div>
      <Hero/>
      <Book/>
      <Plan/>
      <Fleet/>
      <Banner/>
      <Choose/>
      <Testimonials/>
      <Download/>
    </div>
    
    </>
  )
}

export default Home