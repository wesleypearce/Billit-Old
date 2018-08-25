import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createBill } from '../actions/actions'

const billEditorStyle = {
  backgroundColor: 'white'
}

class BillEditor extends Component {
  state = {
    name: '',
    cost: 0,
    dueDate: ''
  }

  // On submit of new bill form, a new bill is created and stored in the redux store
  handleClick = () => {
    this.props.createBill(this.state)
  }

  // Handle input change depending on name property of form field
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const classes = this.props;

    return (
      <div style={billEditorStyle}>
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
    bills: state.bills
  }
}

export default connect(mapStateToProps, { createBill })(BillEditor)
