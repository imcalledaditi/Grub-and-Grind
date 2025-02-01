import { useState } from "react"
import "./ContactUs.css"
import healsImage from '../../assets/heals.png' // Make sure to add the image to your assets folder

const ContactUs = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="footer-section">
          <h3 className="footer-title">Subscribe Newsletter</h3>
          <p className="footer-text">
            Sign up today and take the first step towards a healthier, more balanced lifestyle.
          </p>
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-button">
              Subscribe Now
            </button>
          </form>
        </div>

        {/* All Courses Section */}
        <div className="footer-section">
          <h3 className="footer-title">All Courses</h3>
          <ul className="footer-links">
            <li><a href="#">Daily Exercise</a></li>
            <li><a href="#">Find Your Balance</a></li>
            <li><a href="#">Personal Program</a></li>
            <li><a href="#">Natural Process</a></li>
            <li><a href="#">Immune System</a></li>
            <li><a href="#">Gives You Energy</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-icon phone-icon"></span>
              <a href="tel:+919830355603">+91 9830355603</a>
            </li>
            <li className="contact-item">
              <span className="contact-icon email-icon"></span>
              <a href="mailto:royaditiindia@gmail.com">royaditiindia@gmail.com</a>
            </li>
            <li className="contact-item">
              <span className="contact-icon linkedin-icon"></span>
              <a 
                href="https://www.linkedin.com/in/aditi-roy291122/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="contact-item">
              <span className="contact-icon location-icon"></span>
              <span>Chennai, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="heals-image-container">
        <img src={healsImage} alt="Decorative heals" className="heals-image" />
      </div>
    </footer>
  )
}

export default ContactUs

