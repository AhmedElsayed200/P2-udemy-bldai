import Style from "../../Resources/Styling/Courses.module.css";

const CoursesHeader = ({ coursesNavbar }) => {
  const coursesNavbarContent = coursesNavbar.map((course) => (
    <li key={course}>
      <button className={Style.navbarBtn}>{course}</button>
    </li>
  ));

  return (
    <>
      <div className={Style.header}>A broad selection of courses</div>
      <div className={Style.subHeader}>
        Choose from 185,000 online video courses with new additions published
        every month
      </div>
      <ul className={Style.navbar}>{coursesNavbarContent}</ul>
    </>
  );
};

export default CoursesHeader;
