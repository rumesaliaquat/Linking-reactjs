import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '37ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={props.label} type={props.type} variant="outlined" placeholder={props.placeholder} />
    </Box>
  );
}
