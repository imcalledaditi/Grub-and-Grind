import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import CourseSection from './components/CourseSection';
import AboutUs_temp from './components/AboutUs_temp.jsx'; // Add .jsx extension
import LifestylePillars from './components/FitnessAndNutrition/LifestylePillars.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import './App.css';
import Download from './components/Download/Download.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Recipes1 from './components/Recipie/Recipes1.jsx';  // Import the Recipes component
import Recipes2 from './components/Recipie/Recipes2.jsx';
import Recipes3 from './components/Recipie/Recipes3.jsx';
import Recipes4 from './components/Recipie/Recipes4.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <CourseSection />
                <AboutUs_temp />
                <LifestylePillars />
                <Blogs />
                <Download />
                <ContactUs />
              </>
            } />
            <Route path="/recipes" element={
              <>
                <Recipes1 />
                <Recipes2 />
                <Recipes3 />
                <Recipes4 />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;