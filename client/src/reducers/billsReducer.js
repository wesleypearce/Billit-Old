import _ from 'lodash'
import { GET_BILLS, CREATE_BILL, FILTER_BILLS, ITEMS_LOADING, DELETE_BILL } from '../actions/types'

export default function billsReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_BILL:
      return {
        ...state, [action.payload.id]: action.payload
      }
    case GET_BILLS:
      return {
        ...state, ..._.mapKeys(action.payload, '_id')
      }
    case FILTER_BILLS:
      return {
        ...state,
        bills: action.payload
      }
    case DELETE_BILL:
      return _.omit(state, action.payload)
    default:
      return state
  }
}