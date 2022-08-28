import React from "react";
import Cards from "../Cards/Cards";
import CoursesHeader from "../Courses Header/CoursesHeader";
/* array of objects represents courses info */
import { coursesData } from "../../Resources/Courses Data/CoursesData";
/* array of strings represents courses navbar */
import { coursesNavbar } from "../../Resources/Courses Data/CoursesData";

const CoursesSection = () => {
  const cousrseHeadline = (
    <>
      <div>Expand your career opportunities with Python</div>
      <div>
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language. Its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to both beginners and advanced
        developers alike.
      </div>
      <button>Explore Python</button>
    </>
  );

  return (
    <section>
      <CoursesHeader coursesNavbar={coursesNavbar} />
      {cousrseHeadline}
      <Cards coursesData={coursesData} />
    </section>
  );
};

export default CoursesSection;
