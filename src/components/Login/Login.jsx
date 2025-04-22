import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      alert(response.data.message);
      localStorage.setItem('token', response.data.token); // Save token for authentication
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      alert(error.response?.data?.error || 'Error logging in');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="card">
          <div className="card-content">
            <form className="form-section" onSubmit={handleSubmit}>
              <div className="form-content">
                <div className="form-header">
                  <h1>Welcome back</h1>
                  <p>Login to your Grub & Grind account</p>
                </div>
                
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="m@example.com" required onChange={handleChange} />
                </div>

                <div className="input-group">
                  <div className="password-header">
                    <label htmlFor="password">Password</label>
                    <a href="#" className="forgot-link">Forgot password?</a>
                  </div>
                  <input type="password" id="password" required onChange={handleChange} />
                </div>

                <button type="submit" className="primary-btn">Login</button>

                <div className="separator">
                  <span>Or continue with</span>
                </div>

                  <button type="button" className="social-btn">
                    {/* Google SVG */}
                    <span className="sr-only">Google</span>
                  </button>

                <p className="signup-link">
                  Don't have an account? <a href="#">Sign up</a>
                </p>
              </div>
            </form>

            <div className="image-section">
              <img src="/src/assets/loginsignup/login.jpeg" alt="Workout illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;