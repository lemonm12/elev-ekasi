import React from 'react'
import './Navbar.css'
import logo from '../../assests/Elev8 ekasi.png'

const Navbar = () => {
  return (
   <nav className='container'>
    <img src={logo}alt="" className='logo' />
    <ul>
        <li>Home</li>
        <li>Generate</li>
        <li>About</li>
        <li><button className='btn'>Contact Us</button></li>
    </ul>
   </nav>
  )
}

export default Navbar