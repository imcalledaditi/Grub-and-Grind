import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const scrollToSection = (sectionClass) => (e) => {
    e.preventDefault();
    const section = document.querySelector(sectionClass);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChatbotClick = (e) => {
    e.preventDefault();
    navigate('/chatbot');
    setTimeout(() => {
      const chatbotSection = document.querySelector('.chatbot-section');
      if (chatbotSection) {
        chatbotSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>Grub<span className="accent">&</span>Grind<span className="accent">.</span></h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="#" onClick={scrollToSection('.about-us')}>About Us</a>
        <a href="#" onClick={scrollToSection('.courses-container')}>All Course</a>
        <a href="#" onClick={scrollToSection('.landing-container')}>Chatbot</a>
        <a href="#" onClick={scrollToSection('.blog-section')}>Blog</a>
        <Link to="/recipes">Recipes</Link>
        <a href="#contact" onClick={scrollToSection('#contact')}>Contact Us</a>
        <Link to="/Login" className="Login">
          <button className="login">Log In</button>
        </Link>
        <Link to="/Signup" className="Signup">
          <button className="sign-up">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;