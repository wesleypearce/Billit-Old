import axios from 'axios'

export const deleteBill = id => dispatch => {
  axios.delete(`/api/bills/${id}`).then(res =>
    dispatch({
      type: 'DELETE_BILL',
      payload: id
    })
  )
}

export const filterBills = weekFilter => dispatch => {
  axios.get(`/api/bills/${weekFilter}`).then(res =>
    dispatch({
      type: 'FILTER_BILLS',
      payload: res.data
    })
  )
}

export function selectBill(bill) {
  return { type: 'SELECT_BILL', bill }
}

export function editBill(bill) {
  return { type: 'EDIT_BILL', bill }
}

export const createBill = bill => dispatch => {
  axios.post('/api/bills', bill).then(res =>
    dispatch({
      type: 'CREATE_BILL',
      payload: res.data
    })
  )
}

export const getBills = () => dispatch => {
  axios.get('/api/bills').then(res => 
    dispatch({
      type: 'GET_BILLS',
      payload: res.data
    })
  )
}