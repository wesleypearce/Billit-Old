import React, { Component } from 'react'
import '../node_modules/bulma/css/bulma.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import CreateBill from './components/bills/CreateBill'
import EditBill from './components/bills/EditBill'
import BillList from './components/bills/BillList'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="columns">
          <div className="column">
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/bills/new" component={CreateBill} />
            <Route path="/bills/edit" component={EditBill} />
          </Router>
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
