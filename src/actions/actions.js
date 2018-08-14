export function createBill(id, name, cost, dueDate) {
  return { type: 'CREATE_BILL', id, name, cost, dueDate }
}

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
  return { type: 'FTILER_BILLS', weekFilter}
}
