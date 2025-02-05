import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './CourseSection.css';
import { FaRunning, FaDumbbell } from 'react-icons/fa';
import { GiLotus } from 'react-icons/gi';

const CourseCard = ({ Icon, title, description, hasRightDivider, path }) => {
  return (
    <div className={`course-card ${hasRightDivider ? 'with-divider' : ''}`}>
      <div className="icon-container">
        {/* Wrap icon in Link component */}
        <Link to={path} className="icon-link">
          <Icon className="course-icon" />
        </Link>
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
      description: "Tone, sculpt, and energize! Boost confidence with workouts designed to transform your fitness journey.",
      hasRightDivider: true,
      path: "/womens-course" // Add route path
    },
    {
      Icon: GiLotus,
      title: "Basic Course",
      description: "Start strong! A beginner-friendly program to build strength, endurance, and flexibility at your own pace.",
      hasRightDivider: true,
      path: "/basic-course"
    },
    {
      Icon: FaDumbbell,
      title: "Men's Course",
      description: "Push limits, build muscle, and dominate your fitness game with targeted, high-performance workouts.",
      hasRightDivider: false,
      path: "/mens-course"
    }
  ];

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
            path={course.path} // Pass path to CourseCard
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;