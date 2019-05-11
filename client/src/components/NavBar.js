import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">BillIt</a>
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