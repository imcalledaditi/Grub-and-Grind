import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

export function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.error || 'Error signing up');
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="card">
          <div className="card-content">
            <form className="form-section" onSubmit={handleSubmit}>
              <div className="form-content">
                <div className="form-header">
                  <h1>Create Account</h1>
                  <p>Join the Grub & Grind community</p>
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Email address" required onChange={handleChange} />
                </div>

                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Create password" required onChange={handleChange} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" placeholder="First name" required onChange={handleChange} />
                  </div>
                  <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" placeholder="Last name" required onChange={handleChange} />
                  </div>
                </div>

                <button type="submit" className="primary-btn">Create Account</button>

                <div className="separator">
                  <span>Or sign up with</span>
                </div>

                  <button type="button" className="social-btn">
                    {/* Google SVG */}
                    <span className="sr-only">Google</span>
                  </button>

                <p className="terms">
                  Already have an account?{' '}
                  <a href="/login" className="text-primary">
                    Log in
                  </a>
                </p>
              </div>
            </form>

            <div className="image-section">
              <img src="/src/assets/loginsignup/signup.jpg" alt="Workout illustration" />
            </div>
          </div>
        </div>

        <div className="terms">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-primary">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-primary">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default Signup;