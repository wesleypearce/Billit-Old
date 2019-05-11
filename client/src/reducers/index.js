import { combineReducers } from 'redux'
import billsReducer from './billsReducer'

const reducers = combineReducers({
  bills: billsReducer
})

export default reducers