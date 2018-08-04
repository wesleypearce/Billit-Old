export default function createBill(name, cost, dueDate) {
  return { type: 'CREATE_BILL', name, cost, dueDate }
}
