import React, { Component } from 'react';
import CreateBill from './containers/CreateBill'
import BillList from './containers/BillList'
import './style.css'
import '../node_modules/bulma/css/bulma.min.css'

class App extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <CreateBill />
        </div>
        <div className="column">
          <BillList />
        </div>
      </div>
    )
  }
}

export default App
