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
                  <p>Login to your Acme Inc account</p>
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

                <div className="social-buttons">
                  <button type="button" className="social-btn">
                    {/* Apple SVG */}
                    <span className="sr-only">Apple</span>
                  </button>
                  <button type="button" className="social-btn">
                    {/* Google SVG */}
                    <span className="sr-only">Google</span>
                  </button>
                  <button type="button" className="social-btn">
                    {/* Meta SVG */}
                    <span className="sr-only">Meta</span>
                  </button>
                </div>

                <p className="signup-link">
                  Don't have an account? <a href="#">Sign up</a>
                </p>
              </div>
            </form>

            <div className="image-section">
              <img src="/placeholder.svg" alt="Auth illustration" />
            </div>
          </div>
        </div>

        <div className="terms">
          By clicking continue, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}

export default Login;