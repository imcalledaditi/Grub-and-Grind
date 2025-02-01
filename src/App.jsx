import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CourseSection from './components/CourseSection';
import AboutUs from './components/AboutUs_temp';
import LifestylePillars from './components/FitnessAndNutrition/LifestylePillars';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home></Home>
        <CourseSection></CourseSection>
        <AboutUs></AboutUs>
        <LifestylePillars />
        
        <Routes>
        </Routes>
      </div>
    </Router>
  );
}

export default App;