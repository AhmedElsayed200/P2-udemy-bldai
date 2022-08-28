import React from "react";
import Cards from "../Cards/Cards";
/* array of objects represents courses info */
import { coursesData } from "../../Resources/Courses Data/CoursesData";

function CoursesSection() {
  return <section>{<Cards coursesData={coursesData} />}</section>;
}

export default CoursesSection;
