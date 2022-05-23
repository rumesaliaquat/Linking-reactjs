import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <h3>This is our <i>"SignUp page".</i></h3>
      <Link to='/'> Go to home</Link><br />
      <Link to='/dashboard'> Go to Dashboard</Link>
    </div>
  )
}

export default Signup
