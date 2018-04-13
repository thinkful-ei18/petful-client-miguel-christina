import {combineReducers} from 'redux'
import catReducer from './cat'
import dogReducer from './dog'
import authReducer from './auth'

export default combineReducers({
  cat:catReducer,
  dog:dogReducer
})
