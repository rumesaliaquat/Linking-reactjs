import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import '../styles/DashBoard.css';



function DashBoard() {
  return (
    <>
        <Box sx={{ backgroundColor: 'black', width:'100%', borderBottom:'2px solid gray', color:'white'}} className='box1'>
        <h1>DASHBOARD</h1>
        <div className='div1'>
        <Link to='/' className='link1'>Login</Link>
        <Link to='/signup' className='link1'>Signup</Link>
        </div>
        </Box>
        <div className='dashboard'>
          <Box sx={{ backgroundColor: 'skyblue', width:'250px', padding:3}} className='box2'>
            <Link to='' className='link'>Posts</Link>
            <Link to='' className='link'>Comments</Link>
            <Link to='' className='link'>Albums</Link>
            <Link to='' className='link'>Photos</Link>
            <Link to='' className='link'>Todos</Link>
            <Link to='' className='link'>Users</Link>
          </Box>
          {/* <Box sx={{ backgroundColor: 'lightgray', width:'100%'}}>  </Box> */}
        </div>
    </>
  )
}

export default DashBoard



