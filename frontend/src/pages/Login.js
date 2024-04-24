import React from 'react'
import logo from '../image/logo.png'
export default function Login(){
    return(
        <div className='login-container'>
            <div className='login-container-2'>
                <img src={logo}></img>
                <h1>Scholarship Portal</h1>
                <h3>Sign In</h3>
                <div className='login-container-3'>
                <span>Username</span>
                <input type='text'></input>
                <span>Password</span>
                <input type='text'></input>
                </div>
                <button type='submit'>Submit</button>
            </div>
        </div>
    )
}