import React from 'react'
import { connect } from 'react-redux'
import { createBill } from '../actions'

class CreateBill extends React.Component {
  state = {
    name: '',
    cost: 0,
    dueDate: ''
  }

  handleClick = () => {
    this.props.CreateBill(this.state)
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" onChange={this.handleInputChange} type="text" placeholder="" />          
          </div>
        </div>
        <div className="field">
          <label className="label">Cost</label>
          <div className="control">
            <input className="input" onChange={this.handleInputChange} type="number" placeholder="" />          
          </div>
        </div>
        <div className="field">
          <label className="label">Due Date</label>
          <div className="control">
            <input className="input" onChange={this.handleInputChange} type="date" placeholder={Date.now()} />          
          </div>
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.handleClick}>Create</button>
        </div>
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
  { createBill }
)(CreateBill)