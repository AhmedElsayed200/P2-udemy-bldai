import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CourseHeader from "../../Widgets/Course Header";
import CourseObjectives from "../../Widgets/Course Objectives";
import CourseContent from "../../Widgets/Course Content";
import CourseRequirements from "../../Widgets/Course Requirements";
import CourseDescription from "../../Widgets/Course Description";
import CourseInstructors from "../../Widgets/Course Instructors";
import SideBar from "../../Widgets/Side Bar";
import StudentsFeedback from "../../Widgets/Students Feedback";

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
  }, [
    courseURL,
    coursesData,
    coursesReview,
    coursesSummary,
    selectedCourseContent,
    selectedCourseReview,
    selectedCourseSummary,
  ]);

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
      <StudentsFeedback selectedCourseReview={selectedCourseReview} />
      <SideBar selectedCourseSummary={selectedCourseSummary} />
    </div>
  );
};

export default CoursePage;
