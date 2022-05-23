import React from 'react'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div>
      <h1>Linking using React-Router-Dom </h1>
      <h3>This is our <i>"LogIn page".</i></h3>
      <Link to='/signup'> Go to signup</Link><br />
      <Link to='/dashboard'> Go to Dashboard</Link>
    </div>
  )
}

export default Login
