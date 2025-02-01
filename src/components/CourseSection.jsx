import React from 'react';
import './CourseSection.css';
// Import icons from React Icons
import { FaRunning, FaDumbbell } from 'react-icons/fa'; // for women's course and men's course
import { GiLotus } from 'react-icons/gi';   // for basic course

const CourseCard = ({ Icon, title, description, hasRightDivider }) => {
  return (
    <div className={`course-card ${hasRightDivider ? 'with-divider' : ''}`}>
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
      description: "Strong. Confident. Unstoppable. Transform your fitness journey with workouts designed to tone, sculpt, and energize your body—your time to shine starts now!",
      hasRightDivider: true
    },
    {
      Icon: GiLotus,
      title: "Basic Course",
      description: "Start where you are, use what you have, and crush your fitness goals! Our beginner-friendly program makes fitness fun, simple, and achievable.",
      hasRightDivider: true
    },
    {
      Icon: FaDumbbell,
      title: "Men's Course",
      description: "Strength meets strategy. Push limits,build muscle, and dominate your fitness game with workouts crafted for peak performance and results.",
      hasRightDivider: false
    }
  ];

  return (
    <div className="courses-container" id="courses">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          Icon={course.Icon}
          title={course.title}
          description={course.description}
          hasRightDivider={course.hasRightDivider}
        />
      ))}
    </div>
  );
};

export default CourseSection;