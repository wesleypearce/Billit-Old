import React, { Component } from 'react'

class Test extends Component {
  constructor(props) {
    super(props)

    this.testing = this.testing.bind(this)
  }

  testing() {
    const billsToTest = [
      { id: 0, name: 'Internet', cost: 50, dueDate: '2018-08-23', dueDateInMs: 1534982400000 },
      { id: 1, name: 'Phone', cost: 35, dueDate: '2018-08-28', dueDateInMs: 1535414400000 },
      { id: 2, name: 'Rent', cost: 1230, dueDate: '2018-09-05', dueDateInMs: 1536105600000 },
      { id: 3, name: 'Beer', cost: 20, dueDate: '2018-08-30', dueDateInMs: 1535587200000 },
      { id: 4, name: 'Savings', cost: 200, dueDate: '2018-09-10', dueDateInMs: 1536537600000 }
    ]

    const startDate = Date.parse(new Date())
    const weekOffsetInMs = 604800000
    const weekFilter = 3

    // const output = billsToTest.map(bill => Date.parse(bill.dueDate))
    const output = billsToTest.filter(bill => bill.dueDateInMs > startDate && bill.dueDateInMs < startDate + weekFilter * weekOffsetInMs )

    console.log(billsToTest[0].dueDateInMs + weekOffsetInMs)

    console.log(output)
    // console.log('start date is: ' + startDate)
    // console.log('offset is: ' + (startDate + filter * weekOffsetInMs))
  }

  render() {
    return (
      <div>
        <button onClick={this.testing}>Test</button>
      </div>
    )
  }
}

export default Test
