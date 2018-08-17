import axios from 'axios'

export function deleteBill(id) {
  return { type: 'DELETE_BILL', id }
}

export function selectBill(bill) {
  return { type: 'SELECT_BILL', bill }
}

export function editBill(bill) {
  return { type: 'EDIT_BILL', bill }
}

export function filterBills(weekFilter) {
  return { type: 'FILTER_BILLS', weekFilter}
}

export const createBill = bill => dispatch => {
  axios.post('/api/bills', bill).then(res =>
    dispatch({
      type: 'CREATE_BILL',
      payload: res.data
    })
  )
}