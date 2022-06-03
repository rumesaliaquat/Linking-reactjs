import React from 'react'
import CreateCard from '../config/components/Card';
import Navbar from '../config/components/Navbar';

function Login() {
 
  return (
    <div>
      <Navbar/>
      <CreateCard heading='LOGIN' para='Welcome back! Login with your Credentials' para2="Don't have an account?" link='Sign Up' href={'/signup'} btnlabel='Login'/>
    </div>
  )
}

export default Login
