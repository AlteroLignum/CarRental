const CHANGE = 'CHANGE'

const initialState = {
    list: 'О нас',
}

export const currentList = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE:
      let val = { ...state, list: action.payload}
      return val
    default:
      return state
    }
}