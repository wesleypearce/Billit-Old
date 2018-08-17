import { combineReducers } from 'redux'

function bills(state = [], action) {
  switch (action.type) {
    case 'CREATE_BILL':
      return [
        ...state,
        action.payload
      ]
    case 'DELETE_BILL':
      const id = action.id
      return state.filter(bill => bill.id !== id)
    // case 'EDIT_BILL':
    //   const bill = action.bill
    //   state[bill.id] = {
    //     id: bill.id,
    //     name: bill.name,
    //     cost: bill.cost,
    //     dueDate: bill.dueDate
    //   }
    //   return [
    //     ...state
    //   ]
    case 'FILTER_BILLS':
      const startDate = new Date().getTime()
      const weekOffsetInMs = 604800000
      const weekFilter = action.weekFilter

      // When weekFilter is passed 0, no filter will be used
      if(weekFilter === 0) return state

      return [
        ...state,
        {
          filteredBills: state.filter(bill => bill.dueDateInMs >= startDate && bill.dueDateInMs <= weekFilter * weekOffsetInMs + startDate)
        }
      ]

      // return state.filter(bill => bill.dueDateInMs >= startDate && bill.dueDateInMs <= weekFilter * weekOffsetInMs + startDate)

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

const rootReducer = combineReducers({
  bills,
  billSelect
})

export default rootReducer
