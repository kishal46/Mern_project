import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Singup.css'

const SignUp = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:name,
            email:email,
            password:password
        }
        axios.post('http://localhost:3001/login/post',formData)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        alert("Register Successfull")
         navigate('/login')
         
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h2>Signup Page</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter Your mail id" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter Your Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default SignUp