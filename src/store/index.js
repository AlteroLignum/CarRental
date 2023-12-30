import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import { currentCarReducer } from './currentCarReducer'
import { carArrayReducer } from './carArrayReducer'
import { combineReducers } from 'redux'
import { currentList } from './currentList'
import { carFromAPI } from './carFromAPI'



const generalReducer = combineReducers({
  current:currentCarReducer,
  array:carArrayReducer,
  currentList: currentList,
  carFromAPI: carFromAPI,
})


 export const store = createStore(generalReducer,composeWithDevTools())