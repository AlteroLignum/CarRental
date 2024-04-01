import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { ThemeProvider } from '@material-ui/core'
import Theme from './Theme.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>

)
