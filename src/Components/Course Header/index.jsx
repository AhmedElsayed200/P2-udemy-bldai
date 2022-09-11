import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import exclamition from "../../Resources/SVGs/exclamation-mark.svg";
import language from "../../Resources/SVGs/language.svg";
import caption from "../../Resources/SVGs/captioning.svg";

const CourseHeader = ({ selectedCourseSummary }) => {
  console.log("selectedCourseSummary: ", selectedCourseSummary);

  return (
    <div id="courseHeaderContainer" className="conatiner bg-lightBlack">
      <div id="courseHeaderImg" className="w-4/6 mx-auto">
        <img
          className="pt-5"
          src={selectedCourseSummary?.image_750x422}
          alt={selectedCourseSummary?.title}
        />
      </div>
      <div
        id="courseHeaderContent"
        className="w-4/6 mx-auto mt-4 font-ubuntu text-white"
      >
        <div id="courseTitle" className="text-4xl font-bold mb-3">
          {selectedCourseSummary?.title}
        </div>
        <div id="courseHeadline" className="text-xl font-normal mb-3">
          {selectedCourseSummary?.headline}
        </div>
        <div
          id="courseRatingContainer"
          className="flex text-4xl font-light mb-3"
        >
          <span id="courseRating">
            {Math.round(selectedCourseSummary?.rating * 10) / 10}
          </span>
          <span id="courseRatingIcon">
            <Rating
              name="read-only"
              value={Math.round(selectedCourseSummary?.rating * 10) / 10}
              precision={0.5}
              emptyIcon={
                <StarBorderIcon style={{ opacity: 1 }} fontSize="inherit" />
              }
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
          {`${Number(
            selectedCourseSummary?.last_update_date?.split("-")[1]
          )}/${Number(selectedCourseSummary?.last_update_date?.split("-")[0])}`}
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
