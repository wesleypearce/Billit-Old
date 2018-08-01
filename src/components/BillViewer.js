import React, { Component } from 'react'
import Bill from './Bill'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }
})

class BillViewer extends Component {
  render() {
    const classes = this.props

    return (
      <div>
        {/* Dropdown menu for bill sorting */}

        Due in <Select
          value={1}
        >
          <MenuItem value={1}>1 Week</MenuItem>
          <MenuItem value={2}>2 Weeks</MenuItem>
          <MenuItem value={3}>3 Weeks</MenuItem>
          <MenuItem value={4}>4 Weeks</MenuItem>
        </Select>


        {/* List of bills according to sort displayed here */}
        <Bill />
      </div>
    )
  }
}

export default BillViewer
