import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import aboutImage from '../assets/sebum3.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us bg-gray-50 py-12 px-6" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <div className="relative">
            <Link to="/instructors"> {/* Use Link instead of button */}
              <button className="px-8 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded">
                Our Instructors
              </button>
            </Link>
            <img
              src={aboutImage}
              alt="Fitness Instructor"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Where Fitness Meets Success
          </h1>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Guiding You to a Healthier, Happier You! Our expert instructors are
            dedicated to transforming your fitness goals into reality. Whether
            you're just starting or leveling up, we're here to inspire, support,
            and keep you motivated every step of the way!
          </p>
          <h3 className="text-xl font-semibold text-green-700 mt-6">
            Discover New Ways to Elevate Your Wellness!
          </h3>
          <p className="text-gray-700 mt-2">
            Dive into our diverse courses tailored for every fitness level. Meet
            instructors who bring passion, expertise, and a commitment to helping
            you become the best version of yourself!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;