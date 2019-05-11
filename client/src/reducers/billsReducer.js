import { GET_BILLS, CREATE_BILL, FILTER_BILLS, ITEMS_LOADING, DELETE_BILL } from '../actions/types'

const initialState = {
  bills: [],
  loading: false
}

export default function billsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BILL:
      return {
        ...state,
        bills: [action.payload, ...state.bills]
      }
    case GET_BILLS:
      return {
        ...state,
        bills: action.payload,
        loading: false
      }
    case DELETE_BILL:
      return {
        ...state,
        bills: state.bills.filter(bill => bill._id !== action.payload)
      }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    case FILTER_BILLS:
      return {
        ...state,
        bills: action.payload
      }
    default:
      return state
  }
}