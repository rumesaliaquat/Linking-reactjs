import React from 'react'
import CreateCard from '../config/components/Card';
import Navbar from '../config/components/Navbar'


function Signup() {
  return (
    <div>
     <Navbar/>
      <CreateCard heading='SIGN UP' para="Create an Account, it's free" para2="Already have an account?" link='Login' href={'/'} btnlabel='Sign up' />
    </div>
  )
}

export default Signup
