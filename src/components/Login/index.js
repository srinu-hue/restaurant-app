
import React from 'react';
import'./index.css'


function Login(props) {
    return (
        <div className='divCenter'>
            
            <p className='heading'>Login to the Page</p>
            <label htmlFor='username' >
                <p>Login</p>
                <input className='input' id='username' placeholder='username'/>
            </label>

            <label htmlFor='password' >
                <p>Password</p>
                <input className='input' id='password' placeholder='password'/>
            </label>

            <button className='buttonStyle'>Login</button>

            <label htmlFor='check' className='checkbox'>
                <input type='checkbox'/>
                <p>Save Password for this account</p>
            </label>
        </div>
    );
}

export default Login;