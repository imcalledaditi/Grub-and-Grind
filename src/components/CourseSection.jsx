import React from 'react';
import './CourseSection.css';
import { useHistory } from 'react-router-dom';

// Import icons from React Icons
import { FaRunning, FaDumbbell } from 'react-icons/fa'; // for women's course and men's course
import { GiLotus } from 'react-icons/gi'; // for basic course

// CourseCard Component
const CourseCard = ({ Icon, title, description, hasRightDivider, onIconClick }) => {
  return (
    <div className={`course-card ${hasRightDivider ? 'with-divider' : ''}`}>
      <button className="icon-button" onClick={onIconClick}>
        <Icon className="course-icon" />
      </button>
      <h2 className="course-title">{title}</h2>
      <p className="course-description">{description}</p>
    </div>
  );
};

// CourseSection Component
const CourseSection = () => {
  const history = useHistory(); // Use useHistory to programmatically navigate

  // Course data
  const courses = [
    {
      Icon: FaRunning,
      title: "Women's Course",
      description: "Tone, sculpt, and energize! Boost confidence with workouts designed to transform your fitness journey.",
      hasRightDivider: true,
      path: "/women-course" // Add path for routing
    },
    {
      Icon: GiLotus,
      title: "Basic Course",
      description: "Start strong! A beginner-friendly program to build strength, endurance, and flexibility at your own pace.",
      hasRightDivider: true,
      path: "/basic-course" // Add path for routing
    },
    {
      Icon: FaDumbbell,
      title: "Men's Course",
      description: "Push limits, build muscle, and dominate your fitness game with targeted, high-performance workouts.",
      hasRightDivider: false,
      path: "/men-course" // Add path for routing
    }
  ];

  // Handle icon click to navigate to the appropriate course page
  const handleIconClick = (path) => {
    history.push(path); // Navigate to the course path
  };

  return (
    <div className="courses-space">
      <div className="courses-container" id="courses">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            Icon={course.Icon}
            title={course.title}
            description={course.description}
            hasRightDivider={course.hasRightDivider}
            onIconClick={() => handleIconClick(course.path)} // Pass the click handler with the course path
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
