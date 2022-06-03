import React from 'react'
import '../../styles/Card.css';
import BasicTextFields from './BasicTextFields';
import Card from '@mui/material/Card';
import BasicButtons from './Button';
import { NavLink, useNavigate } from 'react-router-dom';


function CreateCard(props) {
    const navigate = useNavigate()
    const loginUser = () => {
    navigate('/', {
        state: {
            user: true
        }
    })
    }
    return (
        <div>
            <Card className='crd' sx={{ boxShadow: "3 3 10 lightgrey" }}>
                <h1>{props.heading}</h1>
                <p>{props.para}</p>
                <BasicTextFields label="Email" type='email' placeholder='Enter your email..' />
                <BasicTextFields label="Password" type='password' placeholder='Enter your password..' />
                <BasicButtons label={props.btnlabel} onClick={loginUser} />
               
                <p>{props.para2} <NavLink to={props.href}>{props.link}</NavLink></p>
            </Card>
        </div>
    )
}

export default CreateCard;
