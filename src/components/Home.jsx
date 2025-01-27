import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home-container">
      {/* Header Section */}
      <div className="header-section">
        <span className="category-label">FITNESS & NUTRITION</span>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="content-left">
          <h1 className="main-heading">
          This lifestyle fuels<br />your fitness, not<br />just your meals.
          </h1>
          <p className="sub-heading">
          Food is fuel, not therapy.
          </p>
          <Link to="/course" className="start-course-btn">
            Start Course
          </Link>

          {/* Social Links Section */}
          <div className="social-links">
            <p>Connect with us:</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://skype.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-skype"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
