import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import CollapsibleExample from './Components/HOME/Navbar/Navbar2';
import Home from './Components/HOME/Navbar/Home';
import Service from './Components/HOME/Navbar/Service';
import About from './Components/HOME/Navbar/About';
import Admin from './Components/HOME/Navbar/Admin';
import Signup from './Components/HOME/Navbar/Signup';
import Login from './Components/HOME/Navbar/Login';
import Appoinment from './Components/HOME/Navbar/Appoinment';
import ContactPage from './Components/HOME/Navbar/Contact';
import Profile from './Components/HOME/Navbar/Profile';

function App() {
  return (
    <div>
      <CollapsibleExample/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/appointment'element={<Appoinment/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App;
