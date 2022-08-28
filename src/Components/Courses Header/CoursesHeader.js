import React from "react";

const CoursesHeader = (props) => {
  const coursesNavbarContent = props.coursesNavbar.map((course) => (
    <li key={course}>
      <button>{course}</button>
    </li>
  ));

  return (
    <>
      <div>A broad selection of courses</div>
      <div>
        Choose from 185,000 online video courses with new additions published
        every month
      </div>
      <ul>{coursesNavbarContent}</ul>
    </>
  );
};

export default CoursesHeader;
