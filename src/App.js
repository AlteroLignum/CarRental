import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About'
import Modelas from './pages/Models'
import Testimonials from './pages/Testimonials'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import ContactUs from './pages/ContactUs'

function App () {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='models' element={<Modelas/>}/>
        <Route path='testimonials' element={<Testimonials/>}/>
        <Route path='contact' element={<ContactUs/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
