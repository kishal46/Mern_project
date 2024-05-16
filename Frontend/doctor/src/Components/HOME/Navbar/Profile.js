import React from 'react'
import  Authuse  from './UserAuth'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
export default function Profile() {
    const auth=Authuse()
    const navigate=useNavigate()
    const handleLogout=()=>{
        navigate('/')
        auth.setUserName('')
    }
  return (
    <div>
        Welcome --- {auth.userName}<br></br>
        <button onClick={handleLogout} className='logout'>Logout </button>
    </div>
  )
}
