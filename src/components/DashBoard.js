import React from 'react'
import { Link } from 'react-router-dom';

function DashBoard() {
  return (
    <div>
      <h3>This is our <i>"Dashboard".</i></h3>
      <Link to='/'> Go to home</Link><br />
      <Link to='/signup'> Go to signup</Link>
    </div>
  )
}

export default DashBoard

