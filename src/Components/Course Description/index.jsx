import parse from "html-react-parser";
import DOMPurify from "dompurify";

const CourseDescription = ({
  selectedCourseDescription,
  selectedCourseForWho,
}) => {
  console.log("selectedCourseDescription: ", selectedCourseDescription);
  console.log("selectedCourseForWho: ", selectedCourseForWho);
  return (
    <div id="courseDescriptionContainer">
      <div id="courseDescriptionContent">
        <div id="courseDescriptionTxt">
          <div id="courseDescriptionTitle">Description</div>
          <div>
            {parse(
              DOMPurify.sanitize(selectedCourseDescription, {
                USE_PROFILES: { html: true },
              })
            )}
          </div>
        </div>
        <div id="forWho">
          <div id="forWhoTitle">Who this course is for:</div>
          <div id="forWhoTxt">{selectedCourseForWho}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
