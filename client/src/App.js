import React, { Component } from 'react';
import CreateBill from './components/CreateBill'
import BillList from './components/BillList'
import NavBar from './components/NavBar'
import '../node_modules/bulma/css/bulma.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="columns">
          <div className="column">
            <CreateBill />
          </div>
          <div className="column">
            <BillList />
          </div>
        </div>
      </div>
    )
  }
}

export default App
