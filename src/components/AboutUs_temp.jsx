import React from "react";
import aboutImage from '../assets/hero-bg.jpg';
import './AboutUs.css';


const AboutUs = () => {
  return (
    <section className="about-us bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="Fitness Instructor"
            className="rounded-lg shadow-lg"
          />
          
        </div>

        {/* Right Section: Content */}
        <div className="text-center md:text-left">
          <h2 className="text-green-600 font-bold text-lg">
            TRANSFORMING 80,000+ LIVES AND COUNTING!
          </h2>
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
            100+ Ways to Redefine Your Wellness!
          </h3>
          <p className="text-gray-700 mt-2">
            Dive into our diverse courses tailored for every fitness level. Meet
            instructors who bring passion, expertise, and a commitment to helping
            you become the best version of yourself!
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Our Instructors
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
