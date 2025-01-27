import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>Grub<span className="accent">&</span>Grind<span className="accent">.</span></h1>
        </Link>
      </div>
      {/*blah blah blah */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/courses">All Course</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar