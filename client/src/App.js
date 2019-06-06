import React, { Component } from 'react'
import '../node_modules/bulma/css/bulma.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import CreateBill from './components/bills/CreateBill'
import EditBill from './components/bills/EditBill'
import BillList from './components/bills/BillList'
import NavBar from './components/NavBar'

const styles = {
  margin: {
    margin: "10px 50px 10px 50px"
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <div className="columns" style={styles.margin}>
            <div className="column">
                <Route path="/" exact component={Home} />
                <Route path="/bills/new" component={CreateBill} />
                <Route path="/bills/edit" component={EditBill} />
            </div>
            <div className="column">
              <BillList />
            </div>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
