import axios from 'axios'
import { GET_BILLS, 
  CREATE_BILL, 
  DELETE_BILL, 
  FILTER_BILLS, 
  SELECT_BILL,
  EDIT_BILL 
} from './types'

export const deleteBill = id => dispatch => {
  axios.delete(`/api/bills/${id}`).then(res =>
    dispatch({
      type: DELETE_BILL,
      payload: id
    })
  )
}

export const editBill = (id, formValues) => dispatch => {
  axios.put(`/api/bills/${id}`, formValues)
  .then(res => 
    dispatch({
      type: EDIT_BILL,
      payload: res.data
    })
  )
}


export const filterBills = weekFilter => dispatch => {
  axios.get(`/api/bills/${weekFilter}`).then(res =>
    dispatch({
      type: FILTER_BILLS,
      payload: res.data
    })
  )
}

export const createBill = formValues => dispatch => {
  axios.post('/api/bills', formValues).then(res =>
    dispatch({
      type: CREATE_BILL,
      payload: res.data
    })
  )
}

export const getBills = () => dispatch => {
  axios.get('/api/bills').then(res => 
    dispatch({
      type: GET_BILLS,
      payload: res.data
    })
  )
}

export const selectBill = id => {
  return {
    type: SELECT_BILL,
    payload: id
  }
}