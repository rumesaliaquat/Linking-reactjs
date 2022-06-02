import React from 'react'
import CreateCard from '../components/Card'

import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='signup'>
      <Link to='/dashboard'>go to Dashboard</Link>

      <CreateCard heading='SIGN UP' para="Create an Account, it's free" para2="Already have an account?" link='Login' href={'/'} btnlabel='Sign up' />


      {/*
      <Link to='/'> Go to home</Link><br />
      <Link to='/dashboard'> Go to Dashboard</Link> */}
    </div>
  )
}

export default Signup
