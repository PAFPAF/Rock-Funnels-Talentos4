import { combineReducers } from 'redux'
import restaurant from './restaurant'
import gosteiReducer from '../../redux-flow/create-reducer-botao'

export default combineReducers({
  restaurant,
  gosteiReducer,
})
