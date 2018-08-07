import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.space.unit
  }
})

class Bill extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('jesus')
  }

  render() {
    const classes = this.props;
    console.log(this.props)

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-2 bill">
            {this.props.dueDate}
          </div>
          <div className="col-xs-4 bill">
            {this.props.name.toUpperCase()}
          </div>
          <div className="col-xs-2 bill">
            {this.props.cost}
          </div>
          <div className="col-xs-2 bill">
            <a href="#">Edit</a>
          </div>
          <div className="col-xs-2 bill">
          <Button variant="outlined" onClick={this.handleClick} className={classes.button} color="primary">
            Delete
          </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Bill
