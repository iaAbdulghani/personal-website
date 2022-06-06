import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  return (
    <nav className='bar'>
        
        
        <ul className='routes'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
        </ul>

    </nav>
  )
}
