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
import CircularProgress from '@material-ui/core/CircularProgress';
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
    margin: theme.spacing.unit
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px'
  },
  filterSelector: {
    flexGrow: 1,
    alignSelf: 'center',
    margin: '5px'
  },
  billViewer: {
    flexGrow: 1,
    margin: '5px'
  },
  progress: {
    margin: theme.spacing.unit * 2,
  }
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

  handleClick = () => console.log('clicked');

  render() {
    const { bills } = this.props.bills
    const { classes } = this.props
    let total = 0

    if(bills.loading) {
      return (
        <div>
          <CircularProgress className={classes.progress} color="secondary" size={100} />
        </div>
      )
    }

    return (
      <div className={classes.container}>

        {/* Dropdown menu for bill sorting */}
        <div className={classes.filterSelector}>
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
        </div>

        {/* List of bills according to sort displayed here */}
        <div className={classes.billViewer}>
          <List>

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
                <ListItem
                  button
                  key={bill._id}
                  onClick={this.handleClick}>
                  <ListItemText primary={billInfoString}  secondary={dateFormat} />
                  <Button color="primary" variant="outlined" onClick={this.handleDelete.bind(this, bill._id)} className={classes.button}>
                    Delete
                  </Button>
                </ListItem>
              )
            })}
          </List>
          <p>Total due: {total}</p>
        </div>
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
