import { Routes,Route } from 'react-router-dom';
import './App.css';
import {Layout} from './components/Layout/Layout'
import Home from './pages/Home/Home';
import About from './pages/About';
import Models from './pages/Models';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';



function App() {
  

  
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='models' element={<Models/>}/>
        <Route path='testimonials' element={<Testimonials/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  );
}



export default App;
