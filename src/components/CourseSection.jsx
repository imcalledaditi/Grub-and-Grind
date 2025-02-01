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
      description: "Tone, sculpt, and energize! Boost confidence with workouts designed to transform your fitness journey.",
      hasRightDivider: true
    },
    {
      Icon: GiLotus,
      title: "Basic Course",
      description: "Start strong! A beginner-friendly program to build strength, endurance, and flexibility at your own pace.",
      hasRightDivider: true
    },
    {
      Icon: FaDumbbell,
      title: "Men's Course",
      description: "Push limits, build muscle, and dominate your fitness game with targeted, high-performance workouts.",
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