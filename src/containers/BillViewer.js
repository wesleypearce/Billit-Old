import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bill from '../components/Bill'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { deleteBill, editBill } from '../actions/actions'

const billsToTest = [
  { id: 0, name: 'Internet', cost: 50, dueDate: '2018-08-23' },
  { id: 1, name: 'Phone', cost: 35, dueDate: '2018-08-28' },
  { id: 2, name: 'Rent', cost: 1230, dueDate: '2018-09-05' },
  { id: 3, name: 'Beer', cost: 20, dueDate: '2018-08-30' },
  { id: 4, name: 'Savings', cost: 200, dueDate: '2018-09-10' }
]

class BillViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weekFilter: 0
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // Handle change in week filter
  handleChange(event) {
    this.setState({
      weekFilter: event.target.value
    })
  }
  // Function receives an ID from Bill component for deletion of Bill with matching ID from state.bills
  handleDelete(id) {
    this.props.dispatch(deleteBill(id))
  }

  // TODO: edit was not working and needs to be redone. May need to reconsider app heirarchy
  handleEdit(bill) {
    this.props.dispatch(editBill(bill))
  }

  render() {
    // Compare dueDates, sort in increasing order, then display each as a Bill component
    const compare = (a, b) => {
      if(a.dueDate < b.dueDate) return -1
      if(a.dueDate > b.dueDate) return 1
      return 0
    }

    let billList = billsToTest.sort(compare).map((bill) => {
      return (
        <Bill key={bill.id}
        id={bill.id}
        name={bill.name}
        cost={bill.cost}
        dueDate={bill.dueDate}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        />
      )
    })

    return (
      <div>
        {/* Dropdown menu for bill sorting */}

        Due <Select
          value={this.state.weekFilter}
          onChange={this.handleChange}
        >
          <MenuItem value={0}>Anytime</MenuItem>
          <MenuItem value={1}>in 1 Week</MenuItem>
          <MenuItem value={2}>in 2 Weeks</MenuItem>
          <MenuItem value={3}>in 3 Weeks</MenuItem>
          <MenuItem value={4}>in 4 Weeks</MenuItem>
        </Select>

        {/* Test Bill */}
        <Bill id={0} name={'Internet'} cost={30} dueDate={'2018-08-23'} />

        {/* List of bills according to sort displayed here */}
        {billList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bills: state.bills}
}

export default connect(mapStateToProps)(BillViewer)
