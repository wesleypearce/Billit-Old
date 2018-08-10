import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bill from '../components/Bill'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { deleteBill, editBill } from '../actions/actions'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }
})

class BillViewer extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  // Function receives an ID from Bill component for deletion of Bill with matching ID from state.bills
  handleDelete(id) {
    this.props.dispatch(deleteBill(id))
  }

  handleEdit(bill) {
    this.props.dispatch(editBill(bill))
  }

  render() {
    const classes = this.props

    let billList = this.props.bills.map((bill) => {
      return (
        <Bill key={bill.id}
        bill={bill}
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

        Due in <Select
          value={1}
        >
          <MenuItem value={1}>1 Week</MenuItem>
          <MenuItem value={2}>2 Weeks</MenuItem>
          <MenuItem value={3}>3 Weeks</MenuItem>
          <MenuItem value={4}>4 Weeks</MenuItem>
        </Select>


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
