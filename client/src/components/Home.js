import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
      <div className="content is-large">
        <h1>Billit!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="has-text-centered">
        <Link className="button is-primary" to="bills/new">Create a Bill</Link>
      </div>
    </React.Fragment>
  )
}

export default Home