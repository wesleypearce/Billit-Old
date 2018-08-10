import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

// TODO: Make Bill a container

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.space.unit
  }
})

class Bill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bill: {
        id: 0,
        name: '',
        cost: 0,
        dueDate: new Date()
      }
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleClick = (event) => {
    if(event.currentTarget.id === 'edit') this.props.handleEdit(this.state.bill)

    if(event.currentTarget.id === 'delete') this.props.handleDelete(this.props.bill.id)
  }

handleInputChange(event) {
  const target = event.target
  const name = target.name

  this.setState({
    bill: {
      [name]: target.value
    }
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

      {/*!-- Modal --*/}
      <div className="modal fade" id="editBill" tabIndex="-1" role="dialog" aria-labelledby="editBillLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editBillLabel">Edit Bill</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <form className={classes.container} noValidate>
                <TextField
                  id="name"
                  label="Name"
                  type="text"
                  name="name"
                  defaultValue={this.props.name}
                  onChange={this.handleInputChange}
                  className={classes.textField}
                /><br />
                <TextField
                  id="cost"
                  label="Cost"
                  type="number"
                  name="cost"
                  defaultValue={this.props.cost}
                  onChange={this.handleInputChange}
                  className={classes.textField}
                /><br />
                <TextField
                  id="date"
                  label="Due Date"
                  type="date"
                  name="dueDate"
                  defaultValue={this.props.dueDate}
                  onChange={this.handleInputChange}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <Button variant="outlined" onClick={this.handleClick} id="edit" className={classes.button} color="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      </div>
    )
  }
}

export default Bill
