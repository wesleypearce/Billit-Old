import { combineReducers } from 'redux'

const initialState = {
  bills: [],
  loading: false
}

function bills(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_BILL':
      return {
        ...state,
        bills: [action.payload, ...state.bills]
      }
    case 'GET_BILLS':
      return {
        ...state,
        bills: action.payload,
        loading: false
      }
    case 'DELETE_BILL':
      return {
        ...state,
        bills: state.bills.filter(bill => bill._id !== action.payload)
      }
    case 'ITEMS_LOADING':
      return {
        ...state,
        loading: true
      }
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
