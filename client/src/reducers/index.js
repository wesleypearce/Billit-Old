import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import billsReducer from './billsReducer'

const reducers = combineReducers({
  bills: billsReducer,
  form: formReducer
})

export default reducers