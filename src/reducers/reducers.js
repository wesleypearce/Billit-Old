import { combineReducers } from 'redux'

function bills(state = [], action) {
  switch (action.type) {
    case 'CREATE_BILL':
      return [
        ...state,
        {
          name: action.name,
          cost: action.cost,
          dueDate: action.dueDate
        }
      ]
    default:
      return state
  }
}

const billit = combineReducers({
  bills
})

export default billit
