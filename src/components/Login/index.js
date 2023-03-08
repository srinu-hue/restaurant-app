
import React from 'react';
import'./index.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import { FormControlLabel } from '@mui/material';

function Login(props) {
    const {name, setName} = useState('')
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            
            <p className='text-2xl mb-3 font-semibold'>Login to the Page</p>
            
            <TextField
            sx={{ margin: '6px', width: '50%' }}
            id="name"
            label="Name"
            value={name}
            // onChange={handleNameChange}
        />

            <TextField
                 sx={{ margin: '6px', width: '50%' }}
                id="outlined-controlled"
                label="Password"
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value)
                }}
            />
            
            <FormControlLabel sx={{width: '48%'}} control={<Checkbox />} label="Save Password" />
            <Button className='w-64' color="primary" variant="contained">Login</Button>

        </div>
    )
}

export default Login;