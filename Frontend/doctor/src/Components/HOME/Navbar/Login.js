import React, { useState } from 'react'
import Authuse from './UserAuth';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { NavLink } from 'react-router-dom';

export default function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')

    const navigate = useNavigate()
    const auth=Authuse()

    const handleLogin=(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:3001/login/get/${email}`)
        .then(res=>{
            console.log(res)
            if(res.data[0]?.email){
             if(res.data[0]?.password === password){
                setMessage('')
                  alert('Login successfull')
                 auth.login(res.data[0]?.username)
                 navigate('/appointment')
             }
             else{
                setMessage("Incorrect password")
             }
            }
            else{
                setMessage('Email not found')
            }

        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='login'>
            <form onSubmit={handleLogin}>
                <h2>Login page</h2>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder='Enter Your mail id' required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder='Enter Your Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Login</button>
                {message}
            <p >If you don't have an account, <NavLink to='/signUp'>Sign Up</NavLink></p> 
            </form>
            
        </div>
    );
}
