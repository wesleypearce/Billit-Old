import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">BillIt</a>
        </div>
    </div>
    )
  }
}

export default NavBar