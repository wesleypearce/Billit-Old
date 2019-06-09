import _ from 'lodash'
import { GET_BILLS, 
  CREATE_BILL, 
  FILTER_BILLS, 
  ITEMS_LOADING, 
  DELETE_BILL, 
  SELECT_BILL,
  EDIT_BILL
} from '../actions/types'

const initialState = {
  bills: {},
  selectedBill: null
}

export default function billsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BILL:
      return {
        ...state, 
        bills: { 
          ...state.bills, [action.payload._id]: action.payload
        }
      }
    case EDIT_BILL:
      console.log(action.payload)
      return {
        ...state,
        bills: {
          ...state.bills, [action.payload._id]: action.payload
        }
      }
    case GET_BILLS:
      return {
        ...state, 
        bills: {
          ...state.bills, ..._.mapKeys(action.payload, '_id')
        }
      }
    case FILTER_BILLS:
      return {
        ...state,
        bills: action.payload
      }
    case DELETE_BILL:
      return {
        ...state,
        bills: _.omit(state.bills, action.payload)
      }
    case SELECT_BILL:
      return {
        ...state,
        selectedBill: state.bills[action.payload]
      }
    default:
      return state
  }
}