import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CourseSection from './components/CourseSection';
import AboutUs_temp from './components/AboutUs_temp.jsx'; // Add .jsx extension
import LifestylePillars from './components/FitnessAndNutrition/LifestylePillars.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import './App.css';

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
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;