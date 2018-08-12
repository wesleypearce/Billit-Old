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
    case 'EDIT_BILL':
      const bill = action.bill
      state[bill.id] = {
        id: bill.id,
        name: bill.name,
        cost: bill.cost,
        dueDate: bill.dueDate
      }
      return [
        ...state
      ]
    default:
      return state
  }
}

// May not need this. Depends on how I editting a bill will be worked out
function billSelect(state = [{ billSelected: false }], action) {
  switch(action.type) {
    case 'SELECT_BILL':
      return {
        activeBill: action.bill,
        billSelected: true
      }
    default:
      return state
  }
}

const billit = combineReducers({
  bills,
  billSelect
})

export default billit
