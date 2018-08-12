import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createBill } from '../actions/actions'

class BillEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: '',
      cost: 0,
      dueDate: new Date() // TODO: if this is going to be initial state, new Date() is incorrectly formatted
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // On submit of new bill form, a new bill is created and stored in the redux store
  handleClick() {
    this.props.dispatch(createBill(this.state.id, this.state.name, this.state.cost, this.state.dueDate))
    this.setState({ id: this.state.id + 1})
  }

  // Handle input change depending on name property of form field
  handleInputChange(event) {
    const target = event.target
    const name = target.name

    this.setState({
      [name]: target.value
    })
  }

  render() {
    const classes = this.props;

    return (
      <div>
      <h3>Create a Bill</h3>
      <form className={classes.container} noValidate>
        <TextField
          id="name"
          label="Name"
          type="text"
          name="name"
          defaultValue=""
          onChange={this.handleInputChange}
          className={classes.textField}
        /><br />
        <TextField
          id="cost"
          label="Cost"
          type="number"
          name="cost"
          defaultValue=""
          onChange={this.handleInputChange}
          className={classes.textField}
        /><br />
        <TextField
          id="date"
          label="Due Date"
          type="date"
          name="dueDate"
          defaultValue=""
          onChange={this.handleInputChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <Button variant="outlined" onClick={this.handleClick} className={classes.button} color="primary">
        Submit
      </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bills: state.bills,
    billSelect: state.activeBill
  }
}

export default connect(mapStateToProps)(BillEditor)
