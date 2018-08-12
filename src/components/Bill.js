import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class Bill extends Component {
  constructor(props) {
    super(props)

    // Right now, take the props that are passed in from BillViewer for initial state
    this.state = {
      index: this.props.id,
      id: this.props.id,
      name: this.props.name,
      cost: this.props.cost,
      dueDate: this.props.dueDate
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleClick = (event) => {
    // TODO: until I get edit bill working this if statement is unneccesary
    if(event.currentTarget.id === 'delete') this.props.handleDelete(this.props.id)
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
      <div className="container">
        <div className="row">
          <div className="col-xs-2 bill">
            {this.props.dueDate}
          </div>
          <div className="col-xs-4 bill">
            {this.props.name}
          </div>
          <div className="col-xs-2 bill">
            {this.props.cost}
          </div>
          <div className="col-xs-2 bill">
          <Button
            variant="outlined"
            className={classes.button}
            color="primary"
            data-toggle="modal"
            data-target="#editBill">
              Edit
          </Button>
          </div>
          <div className="col-xs-2 bill">
          <Button variant="outlined" onClick={this.handleClick} id="delete" className={classes.button} color="secondary">
            Delete
          </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Bill
