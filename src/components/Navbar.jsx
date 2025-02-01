import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const scrollToSection = (sectionClass) => (e) => {
    e.preventDefault();
    const section = document.querySelector(sectionClass);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <a href="#" onClick={scrollToSection('.about-us')}>About Us</a>
        <a href="#" onClick={scrollToSection('.courses-container')}>All Course</a>
        <a href="#" onClick={scrollToSection('.blog-section')}>Blog</a>
        <a href="#contact" onClick={scrollToSection('#contact')}>Contact Us</a>
        <button className="login">Log In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar