import Cards from "../Cards/Cards";
import CoursesHeader from "../Courses Header/CoursesHeader";
import Style from "../../Resources/Styling/Courses.module.css";
/* array of objects represents courses info */
import { coursesData } from "../../Resources/Courses Data/CoursesData";
/* array of strings represents courses navbar */
import { coursesNavbar } from "../../Resources/Courses Data/CoursesData";

const CoursesSection = () => {

  return (
    <section className={Style.container}>
      <CoursesHeader coursesNavbar={coursesNavbar} />
      <div className={Style.viewer}>
        <div className={Style.headline}>
          Expand your career opportunities with Python
        </div>
        <div className={Style.subHeadline}>
          Take one of Udemy’s range of Python courses and learn how to code using
          this incredibly useful language. Its simple syntax and readability makes
          Python perfect for Flask, Django, data science, and machine learning.
          You’ll learn how to build everything from games to sites to apps. Choose
          from a range of courses that will appeal to both beginners and advanced
          developers alike.
        </div>
        <button className={Style.exploreBtn}>Explore Python</button>
        <Cards coursesData={coursesData} />
      </div>
    </section>
  );
};

export default CoursesSection;
