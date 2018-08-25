import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import BillTotal from '../components/BillTotal'
import { deleteBill, editBill, filterBills, getBills } from '../actions/actions'
import { compose } from 'redux'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

class BillViewer extends Component {

  state = {
    weekFilter: 0,
    open: false,
    selectedBill: {}
  }

  handleOpen = (id) => {
    this.setState({
      open: true,
      selectedBill: id
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  componentDidMount() {
    this.props.getBills()
  }

  // Handle change in week filter. Dispatch FILTER_BILLS
  handleChange = event => {
    this.setState({
      weekFilter: event.target.value
    })
    this.props.filterBills(event.target.value)
  }
  // Function receives an ID from Bill component for deletion of Bill with matching ID from state.bills
  handleDelete = id => this.props.deleteBill(id)

  handleClick = () => {
    console.log('clicked')
  }

  render() {
    const { bills } = this.props.bills
    const { classes } = this.props
    const { selectedBill } = this.state
    console.log(selectedBill.dueDate)


    // let billTotal = 0
    // if(bills !== []) {
    //   console.log(bills)
    //   billTotal = bills.reduce((accumulator, currentValue) => accumulator + currentValue)
    // }

    return (
      <div className={classes.root}>

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

        {/* List of bills according to sort displayed here */}
        <List>

          {bills.map((bill) => {
            // Format dueDate string to (Day of Week)(Month)(Date)
            const offset = 86400000 // Time zone offset in ms
            const date = new Date(Date.parse(bill.dueDate) + offset)
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const dateFormat = days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()

            // Format bill info string
            const billInfoString = '$' + bill.cost + ' ' + bill.name

            return (
              <ListItem
                key={bill._id}>
                <ListItemText primary={billInfoString}  secondary={dateFormat} />
                <button onClick={this.handleOpen.bind(this, bill)}>Edit</button>
              </ListItem>
            )
          })}
        </List>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="title" id="modal-title">
            Edit Bill
          </Typography>
          <Typography variant="subheading" id="simple-modal-description">
          <form className={classes.container} noValidate>
            <TextField
              id="name"
              label="Name"
              type="text"
              name="name"
              defaultValue={selectedBill.name}
              onChange={this.handleInputChange}
              className={classes.textField}
            /><br />
            <TextField
              id="cost"
              label="Cost"
              type="number"
              name="cost"
              defaultValue={selectedBill.cost}
              onChange={this.handleInputChange}
              className={classes.textField}
            /><br />
            <TextField
              id="date"
              label="Due Date"
              type="date"
              name="dueDate"
              defaultValue={selectedBill.dueDate}
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
          </Typography>
        </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bills: state.bills, filteredBills: state.bills.filteredBills }
}

export default compose(
  withStyles(styles, { name: 'BillViewer' }),
  connect(mapStateToProps, { getBills, deleteBill, filterBills })
)(BillViewer)
