import Style from "../../Resources/Styling/Courses.module.css";

const CoursesHeader = ({ coursesNavbar, selectCourse }) => {
  const handleCourseSelect = (course) => {
    selectCourse(course);
    console.log(course);
  };

  return (
    <>
      <div className={Style.header}>A broad selection of courses</div>
      <div className={Style.subHeader}>
        Choose from 185,000 online video courses with new additions published
        every month
      </div>
      <ul className={Style.navbar}>
        {coursesNavbar.map((course) => (
          <li key={course}>
            <button
              onClick={() => handleCourseSelect(course)}
              className={Style.navbarBtn}
            >
              {course}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoursesHeader;
