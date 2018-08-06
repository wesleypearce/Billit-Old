export default function createBill(id, name, cost, dueDate) {
  return { type: 'CREATE_BILL', id, name, cost, dueDate }
}
