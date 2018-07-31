import React, { Component } from 'react'

class Bill extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-2 bill">
            05/31/18
          </div>
          <div className="col-xs-4 bill">
            Electric
          </div>
          <div className="col-xs-2 bill">
            $100
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
