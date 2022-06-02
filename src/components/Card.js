import React from 'react'
import '../styles/Card.css';
import BasicTextFields from './BasicTextFields';
import Card from '@mui/material/Card';
import BasicButtons from './Button';
import { Link } from 'react-router-dom';


function CreateCard(props) {
    return (
        <div>
            <Card className='crd' sx={{ boxShadow: "3 3 10 lightgrey" }}>
                <h1>{props.heading}</h1>
                <p>{props.para}</p>
                <BasicTextFields label="Email" placeholder='Enter your email..' />
                <BasicTextFields label="Password" placeholder='Enter your password..' />
                <BasicButtons label={props.btnlabel} />
               
                <p>{props.para2} <Link to={props.href}>{props.link}</Link></p>
            </Card>
        </div>
    )
}

export default CreateCard;
