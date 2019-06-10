import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
      <div className="content is-large">
        <h1>Billit!</h1>
        <p>Welcome to Billit! Billit helps you keep track of your upcoming bills. Don't be late on a single payment!</p>
      </div>
      <div className="has-text-centered">
        <Link className="button is-success" to="bills/new">Create a Bill</Link>
      </div>
    </React.Fragment>
  )
}

export default Home