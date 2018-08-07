export function createBill(id, name, cost, dueDate) {
  return { type: 'CREATE_BILL', id, name, cost, dueDate }
}

export function deleteBill(id) {
  return { type: 'DELETE_BILL', id}
}
