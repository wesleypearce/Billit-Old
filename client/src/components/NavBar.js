import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar is-success" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">BillIt</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="button is-success is-inverted has-text-black" to="/bills/new">Create a Bill</Link>
          </div>
        </div>
    </div>
    )
  }
}

export default NavBar