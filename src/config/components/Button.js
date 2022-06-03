import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
  return (
    <Button variant="contained" 
    sx={{borderRadius:5, margin: 1}} 
    size='large' 
    fullWidth='true'
    onClick={props.onClick}>
    {props.label}
    </Button>
  );
}
