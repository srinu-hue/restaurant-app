
import React from 'react';
import'./index.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import { FormControlLabel } from '@mui/material';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')


    return (
        <form className='flex flex-col justify-center items-center h-screen'>
            
            <p className='text-2xl mb-3 font-semibold'>Login to the Page</p>
            
            <TextField
            sx={{ margin: '6px', width: '50%' }}
            id="username"
            label="Username"
            value={username}
            onChange={(event) => 
                setUsername(event.target.value)
            }        />

            <TextField
                 sx={{ margin: '6px', width: '50%' }}
                 className='w-72'
                id="outlined-controlled"
                label="Password"
                type='password'
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            
            <FormControlLabel sx={{width: '48%'}} control={<Checkbox />} label="Save Password" />
            <Button onClick={() => console.log(username)} className='' sx={{width: '50%'}}  color="primary" variant="contained">Login</Button>

        </form>
    )
}

export default Login;