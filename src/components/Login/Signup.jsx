import React from 'react';
import './Signup.css';

export function Signup() {
  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="card">
          <div className="card-content">
            <form className="form-section">
              <div className="form-content">
                <div className="form-header">
                  <h1>Create Account</h1>
                  <p>Join the Grub & Grind community</p>
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Email address" required />
                </div>

                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Create password" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="input-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" placeholder="First name" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" placeholder="Last name" required />
                  </div>
                </div>

                <button type="submit" className="primary-btn">Create Account</button>

                <div className="separator">
                  <span>Or sign up with</span>
                </div>

                <div className="social-buttons">
                  <button type="button" className="social-btn">
                    {/* Google SVG */}
                    <span className="sr-only">Google</span>
                  </button>
                  <button type="button" className="social-btn">
                    {/* Meta SVG */}
                    <span className="sr-only">Meta</span>
                  </button>
                </div>

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