import React, { Component } from 'react'

class Bill extends Component {
  render() {
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
            <a href="#">Edit</a>
          </div>
          <div className="col-xs-2 bill">
            <a href="#">Delete</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Bill
