import React from 'react'
import { Link } from 'react-router-dom'
import CreateCard from '../components/Card'

function Login() {
 
  return (
    <div>
      <h1>Linking using React-Router-Dom </h1>
      <Link to='/dashboard'>go to Dashboard</Link>
      
      <CreateCard heading='LOGIN' para='Welcome back! Login with your Credentials' para2="Don't have an account?" link='Sign Up' href={'/signup'} btnlabel='Login'/>
    </div>
  )
}

export default Login
