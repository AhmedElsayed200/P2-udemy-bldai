import Rating from "@mui/material/Rating";
import exclamition from "../../Resources/SVGs/exclamation-mark.svg";
import language from "../../Resources/SVGs/language.svg";
import caption from "../../Resources/SVGs/captioning.svg";

const CourseHeader = ({ selectedCourseSummary }) => {
  console.log(selectedCourseSummary);

  return (
    <div id="courseHeaderContainer">
      <div id="courseHeaderContent">
        <div id="courseTitle">{selectedCourseSummary?.title}</div>
        <div id="courseHeadline">{selectedCourseSummary?.headline}</div>
        <div id="courseRatingContainer">
          <span id="courseRating">
            {Math.round(selectedCourseSummary?.rating * 10) / 10}
          </span>
          <span id="courseRatingIcon">
            <Rating
              name="read-only"
              value={Math.round(selectedCourseSummary?.rating * 10) / 10}
              precision={0.5}
              readOnly
            />
          </span>
          <span id="courseRatersNum">{`(${selectedCourseSummary?.num_reviews} ratings)`}</span>
          <span id="courseSubscribersNum">
            {selectedCourseSummary?.num_subscribers} students
          </span>
        </div>
        <div id="courseInstructorsHeader">
          {`Created by `}
          {selectedCourseSummary?.visible_instructors?.map(
            (instructor, indx) => {
              return (
                <span key={instructor.id}>
                  <a href={`#${instructor.id}`}>
                    {instructor.title}
                    {indx <
                    selectedCourseSummary?.visible_instructors.length - 1
                      ? ", "
                      : ""}
                  </a>
                </span>
              );
            }
          )}
        </div>
        <div id="lastUpdated">
          <img className="w-4 h-4" src={exclamition} alt="exclamation" />
          {`Last updated `}
          {selectedCourseSummary?.last_update_date}
        </div>
        <div id="courseLanguage">
          <img className="w-4 h-4" src={language} alt="language" />
          {selectedCourseSummary?.locale?.title}
        </div>
        <div id="courseCaptions">
          <img className="w-4 h-4" src={caption} alt="subtitles" />
          {selectedCourseSummary?.caption_languages?.map((caption, indx) => {
            return (
              <span key={caption}>
                {caption}
                {indx < selectedCourseSummary?.caption_languages.length - 1
                  ? ", "
                  : ""}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
