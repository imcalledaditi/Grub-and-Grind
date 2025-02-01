import React from 'react';
import './CourseSection.css';
// Import icons from React Icons
import { FaRunning } from 'react-icons/fa'; // for women's course
import { GiLotus } from 'react-icons/gi';   // for basic course
import { FaDumbbell } from 'react-icons/fa'; // for men's course

const CourseCard = ({ Icon, title, description }) => {
  return (
    <div className="course-card">
      <div className="icon-container">
        <Icon className="course-icon" />
      </div>
      <h2 className="course-title">{title}</h2>
      <p className="course-description">{description}</p>
    </div>
  );
};

const CourseSection = () => {
  const courses = [
    {
      Icon: FaRunning,
      title: "Women's Course",
      description: "Strong. Confident. Unstoppable. Transform your fitness journey with workouts designed to tone, sculpt, and energize your body—your time to shine starts now!"
    },
    {
      Icon: GiLotus,
      title: "Basic Course",
      description: "Start where you are, use what you have, and crush your fitness goals! Our beginner-friendly program makes fitness fun, simple, and achievable."
    },
    {
      Icon: FaDumbbell,
      title: "Men's Course",
      description: "Strength meets strategy. Push limits,build muscle, and dominate your fitness game with workouts crafted for peak performance and results."
    }
  ];

  return (
    <div className="courses-container">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          Icon={course.Icon}
          title={course.title}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default CourseSection;