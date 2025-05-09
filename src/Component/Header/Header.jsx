import React from 'react'
import LOGO from "../../assets/KHUSHI.png"
import "./Header.css"


const Header = () => {
  return (
    <header>
        <img src={LOGO} alt="logo that have name Khushi nagaliya" className="logo-img" />

        {/* Navbar */}
         <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact me</a></li>
         </ul>
    </header>
  )
}

export default Header