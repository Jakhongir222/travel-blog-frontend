import React from 'react'
import Image from 'next/image'
import "../styles/layout.css";

function Navbar () {
  return (
    <div>
        <div className='logo'>
        <a href='/'><Image src="/logo.png" width="200" height="130" alt="Logo" /></a></div>
      <div className='navbar'>
        <a href='/'><button className='navbar-button'>Home</button></a>
        <a href='/destinations'><button className='navbar-button'>Destinations</button></a>
        <a href='/tips'><button className='navbar-button'>Travel Tips</button></a>
        <a href='/about'><button className='navbar-button'>About</button></a>
      </div>
    </div>
  )
}

export default Navbar
