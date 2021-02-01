import { GET_AVANCAR } from './reducers/restaurant/actions'

let initialState = { pagina : 0 }

export function gosteiReducer(state = initialState, action){
  switch(action.type){
    case GET_AVANCAR:
      return {
        pagina: state.pagina + 1
      }
    default: return state
  }
}

export default gosteiReducer