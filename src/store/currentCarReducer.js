const CHOOSE = 'CHOOSE'
const CHOOSE_ID = 'CHOOSE_ID'

const initialState = {
    current:'Audi R8',
    currentID: 0,
}

export const currentCarReducer = (state = initialState, action) => {
    switch (action.type) {
  
    case CHOOSE:
      let val = { ...state, current: action.payload}
      return val
    case CHOOSE_ID:
      return {...state, currentID: action.payload}
    default:
      return state
    }
  }