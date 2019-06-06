import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { getBills, filterBills, deleteBill } from '../../actions'

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
    let total = 0

    return (
      <React.Fragment>
        <div className="level">
          <div className="level-left">
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
          </div>
          <div className="level-right">
            <p className="title is-3">Total Due: {total}</p>
          </div>
        </div>
        <div className="list">
          {this.props.bills.map((bill) => {

            // Format bill info string
            const billInfoString = '$' + bill.cost + ' ' + bill.name

            return (
              <div className="card" key={bill._id}>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{billInfoString}</p>
                      <p>{format(bill.dueDate, 'dddd MMM Do YYYY')}</p>
                    </div>
                    <div className="media-right">
                      <Link className="button is-info" to="bills/edit">Edit</Link>
                    </div>
                    <div className="media-right">
                      <button className="button is-danger" onClick={this.handleDelete.bind(this, bill._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })} 
        </div>          

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    bills: Object.values(state.bills)
  }
}

export default connect(
  mapStateToProps,
  { getBills, filterBills, deleteBill }
)(BillList)