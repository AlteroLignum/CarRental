
const GET_CARS = 'GET_CARS'
const initialState = []



export const carFromAPI = (state = initialState,action) =>{
    switch (action.type) {
        case GET_CARS:
          let val = { ...state, current: action.payload}
          return val
        default:
          return state
        }
}