import React from 'react';
import './Login.css';

export function Login({ className, ...props }) {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="card">
          <div className="card-content">
            <form className="form-section">
              <div className="form-content">
                <div className="form-header">
                  <h1>Welcome back</h1>
                  <p>Login to your Grub & Grind account</p>
                </div>
                
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="m@example.com" required />
                </div>

                <div className="input-group">
                  <div className="password-header">
                    <label htmlFor="password">Password</label>
                    <a href="#" className="forgot-link">Forgot password?</a>
                  </div>
                  <input type="password" id="password" required />
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