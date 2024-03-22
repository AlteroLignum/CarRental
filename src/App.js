import { Routes,Route } from 'react-router-dom';
import './App.css';
import {Layout} from './components/Layout/Layout'
import Home from './pages/Home/Home';
import About from './pages/About';
import Modelas from './pages/Models';
import Testimonials from './pages/Testimonials';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import ContactUs from './pages/ContactUs';

function App() {
  // const dispatch = useDispatch()

  // useEffect(() =>{
  //   async function getData(){
  //       const options = {
  //       method: 'GET',
  //       url: 'https://car-data.p.rapidapi.com/cars',
  //       params: {
  //         limit: '10',
  //         page: '0'
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': '54f98c719cmsh2c16ab686fbc457p1f9c08jsn50498848fd65',
  //         'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  //       }
  //     };
      
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       dispatch({type:'GET_CARS',payload:response})

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getData()
  // },[])


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
  );
}



export default App;
