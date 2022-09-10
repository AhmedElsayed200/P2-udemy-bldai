import Cards from "./Cards";
import CoursesHeader from "./CoursesHeader";
import Style from "../../Resources/Styling/Courses.module.css";
/* array of strings represents courses navbar */
import { coursesNavbar } from "../../Resources/Courses Data/CoursesData";
import { useState } from "react";

const CoursesSection = ({ coursesSummary }) => {
  const [selectedCourse, setSelectedCourse] = useState("Python");

  const selectCourse = (course) => {
    setSelectedCourse(course);
  };

  return (
    <section className={Style.container}>
      <CoursesHeader
        coursesNavbar={coursesNavbar}
        selectedCourse={selectedCourse}
        selectCourse={selectCourse}
      />
      {coursesSummary.map((course) => {
        return (
          <div
            key={course.id}
            className={
              course.title === selectedCourse ? Style.show : Style.hide
            }
          >
            <div className={Style.viewer}>
              <div className={Style.headline}>{course.description}</div>
              <div className={Style.subHeadline}>{course.header}</div>
              <button className={Style.exploreBtn}>
                Explore {course.title}
              </button>
              <Cards items={course.items} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CoursesSection;
