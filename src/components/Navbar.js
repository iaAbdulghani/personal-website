import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        
        <NavLink to="/">Home</NavLink>
        <ul>
            
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
        </ul>

    </nav>
  )
}
