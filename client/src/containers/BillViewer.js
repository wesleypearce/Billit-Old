import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { deleteBill, editBill, filterBills, getBills } from '../actions/actions'
import { compose } from 'redux'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class BillViewer extends Component {

  state = {
    weekFilter: 0,
    open: true
  }

  componentDidMount() {
    this.props.getBills()
  }

  // Handle change in week filter. Dispatch FILTER_BILLS
  handleChange(event) {
    this.setState({
      weekFilter: event.target.value
    })
    this.props.dispatch(filterBills(event.target.value))
  }
  // Function receives an ID from Bill component for deletion of Bill with matching ID from state.bills
  handleDelete = id => this.props.deleteBill(id)

  handleClick = () => {
    this.setState({ open: !this.state.open})
  }

  render() {
    // Compare dueDates, sort in increasing order, then display each as a Bill component
    // const compare = (a, b) => {
    //   if(a.dueDate < b.dueDate) return -1
    //   if(a.dueDate > b.dueDate) return 1
    //   return 0
    // }

    const { bills } = this.props.bills
    console.log(this.props)

    return (
      <div className={styles.root}>
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
              <div>
              <ListItem 
                button
                onClick={this.handleClick}
                key={bill._id}>
                <ListItemText primary={billInfoString}  secondary={dateFormat} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={styles.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
              </div>
              
            ) 
          })}
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bills: state.bills}
}

// export default connect(mapStateToProps, { getBills, deleteBill })(BillViewer)

export default compose(
  withStyles(styles, { name: 'BillViewer' }),
  connect(mapStateToProps, { getBills, deleteBill })
)(BillViewer)
