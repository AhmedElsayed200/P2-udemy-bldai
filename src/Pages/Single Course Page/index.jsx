import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CourseHeader from "../../Components/Course Header";
import CourseObjectives from "../../Components/Course Objectives";
import CourseContent from "../../Components/Course Content";
import CourseRequirements from "../../Components/Course Requirements";
import CourseDescription from "../../Components/Course Description";
import CourseInstructors from "../../Components/Course Instructors";

const CoursePage = ({ coursesSummary, coursesData, coursesReview }) => {
  const [selectedCourseSummary, setSelectedCourseSummary] = useState({});
  const [selectedCourseContent, setSelectedCourseContent] = useState({});
  const [selectedCourseReview, setSelectedCourseReview] = useState({});

  console.log("coursesSummary: ", coursesSummary);
  console.log("coursesData: ", coursesData);
  console.log("coursesReview: ", coursesReview);

  let { courseURL } = useParams();

  // console.log(courseURL);

  useEffect(() => {
    /* set the course summary data based on the path */
    for (const ele of coursesSummary) {
      for (const item of ele.items) {
        if (item.url.includes(courseURL)) {
          console.log("shsasjaskdjalsdja");
          console.log(item);
          setSelectedCourseSummary(item);
          break;
        }
      }
    }
    /* set the course content based on the path */
    for (const ele of coursesData) {
      if (ele.curriculum_context?.data?.url?.includes(courseURL)) {
        setSelectedCourseContent(ele);
        for (const review of coursesReview) {
          if (review.id === ele.id) setSelectedCourseReview(review);
        }
        break;
      }
    }
  });

  return (
    <div id="coursePage">
      <CourseHeader selectedCourseSummary={selectedCourseSummary} />
      <CourseObjectives selectedCourseSummary={selectedCourseSummary} />
      <CourseContent
        selectedCourseCurriculum={selectedCourseContent?.curriculum_context}
      />
      <CourseRequirements
        selectedCourseRequirements={
          selectedCourseContent?.details?.Requirements
        }
      />
      <CourseDescription
        selectedCourseDescription={selectedCourseContent?.details?.description}
        selectedCourseForWho={selectedCourseContent?.details?.for_who}
      />
      <CourseInstructors
        selectedCourseInstructors={selectedCourseSummary?.visible_instructors}
      />
    </div>
  );
};

export default CoursePage;
