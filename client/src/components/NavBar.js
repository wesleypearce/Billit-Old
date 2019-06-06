import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">BillIt</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button is-secondary">Log In</button>
          </div>
        </div>
    </div>
    )
  }
}

export default NavBar