import React from 'react'
import { connect } from 'react-redux'
import { getBills, filterBills, deleteBill } from '../actions'

// TODO: New bill created should be added to list in order of date

class BillList extends React.Component {

  state = {
    weekFilter: 0
  }

  componentDidMount = () => {
    this.props.getBills()
    console.log(this.props)
  }

  handleChange = event => {
    this.setState({
      weekFilter: event.target.value
    })
    this.props.filterBills(event.target.value)
  }

  handleDelete = id => this.props.deleteBill(id)

  render() {
    const { bills } = this.props.bills
    let total = 0

    return (
      <div>
        <div className="control">
          <div className="select" onChange={this.handleChange}>
            <select>
              <option value={0}>Anytime</option>
              <option value={1}>in 1 Week</option>
              <option value={2}>in 2 Weeks</option>
              <option value={3}>in 3 Weeks</option>
              <option value={4}>in 4 Weeks</option>
            </select>
          </div>
        </div>
        
        <div className="list">
          {bills.map((bill) => {
            // Format dueDate string to (Day of Week)(Month)(Date)
            const offset = 86400000 // Time zone offset in ms
            const date = new Date(Date.parse(bill.dueDate) + offset)
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const dateFormat = days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()
            total += bill.cost

            // Format bill info string
            const billInfoString = '$' + bill.cost + ' ' + bill.name

            return (
              <div className="box" key={bill._id}>
                <p>{billInfoString}</p>
                <p>{dateFormat}</p>
                <button className="button is-danger" onClick={this.handleDelete.bind(this, bill._id)}>Delete</button>
              </div>
            )
          })} 
        </div>
        <p>Total due: {total}</p>    
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bills: state.bills
  }
}

export default connect(
  mapStateToProps,
  { getBills, filterBills, deleteBill }
)(BillList)