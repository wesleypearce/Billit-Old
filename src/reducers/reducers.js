import { combineReducers } from 'redux'

function bills(state = [], action) {
  switch (action.type) {
    case 'CREATE_BILL':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          cost: action.cost,
          dueDate: action.dueDate
        }
      ]
    case 'DELETE_BILL':
      const id = action.id
      return state.filter(bill => bill.id !== id)
    default:
      return state
  }
}

const billit = combineReducers({
  bills
})

export default billit
