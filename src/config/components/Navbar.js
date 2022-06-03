import React from 'react'
import '../../styles/Navbar.css';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';


function Navbar(props) {
    return (
        <div>
            <Box sx={{ backgroundColor: 'black', width: '100%', borderBottom: '2px solid gray', color: 'white' }} className='box1'>
                <h1>{props.logoName}</h1>
                <div className='div1'>
                    <NavLink to='/login' className={'link1'}>Login
                    </NavLink>
                    <NavLink to='/signup' className={'link1'}>Signup</NavLink>
                    <NavLink to='/' className={'link1'}>Dashboard</NavLink>
                </div>
            </Box>
        </div>
    )
}

export default Navbar
