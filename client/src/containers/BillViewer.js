import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { deleteBill, filterBills, getBills } from '../actions/actions'
import { compose } from 'redux'

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
    weekFilter: 0
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

  render() {
    const { bills } = this.props.bills
    const { classes } = this.props

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
                <Button color="secondary" variant="outlined" onClick={this.handleDelete.bind(this, bill._id)} className={classes.button}>
                  Delete
                </Button>
              </ListItem>
            )
          })}
        </List>
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
