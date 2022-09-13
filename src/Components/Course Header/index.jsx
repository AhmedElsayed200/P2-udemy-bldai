import AddToCart from "./addToCart";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import exclamition from "../../Resources/SVGs/exclamation-mark.svg";
import language from "../../Resources/SVGs/language.svg";
import caption from "../../Resources/SVGs/captioning.svg";

const CourseHeader = ({ selectedCourseSummary }) => {
  console.log("selectedCourseSummary: ", selectedCourseSummary);

  return (
    <div id="courseHeaderContainer" className="conatiner bg-lightBlack">
      <div
        id="courseHeaderImg"
        className="max-w-3xl w-screen sm:w-4/5 mx-auto lg:hidden"
      >
        <img
          className="pt-5 mx-auto"
          src={selectedCourseSummary?.image_750x422}
          alt={selectedCourseSummary?.title}
        />
      </div>
      <div
        id="courseHeaderContent"
        className="max-w-3xl w-11/12 sm:w-4/5 lg:ml-20 xs:mx-auto pt-4 font-ubuntu text-white md:pt-5"
      >
        <div
          id="courseTitle"
          className="xs:text-2xl md:text-4xl font-bold mb-3"
        >
          {selectedCourseSummary?.title}
        </div>
        <div id="courseHeadline" className="text-xl font-normal mb-3">
          {selectedCourseSummary?.headline}
        </div>
        {selectedCourseSummary?.badges?.map((badge) => {
          return (
            <span
              key={badge.id}
              className="inline-block bg-midYellow text-bronzeOlive font-bold px-2 py-1 mr-3"
            >
              {badge.badge_text}
            </span>
          );
        })}
        <div
          id="courseRatingContainer"
          className="inline-flex gap-x-2 text-xl font-normal mb-2"
        >
          <span id="courseRating" className="font-bold text-yellow text-lg">
            {Math.round(selectedCourseSummary?.rating * 10) / 10}
          </span>
          <span id="courseRatingIcon">
            <Rating
              name="read-only"
              value={Math.round(selectedCourseSummary?.rating * 10) / 10}
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              readOnly
            />
          </span>
          <span
            id="courseRatersNum"
            className="text-lightViolet underline"
          >{`(${selectedCourseSummary?.num_reviews} ratings)`}</span>
          <span id="courseSubscribersNum">
            {selectedCourseSummary?.num_subscribers} students
          </span>
        </div>
        <div id="courseInstructorsHeader" className="mb-2">
          {`Created by `}
          {selectedCourseSummary?.visible_instructors?.map(
            (instructor, indx) => {
              return (
                <span key={instructor.id}>
                  <a href={`#${instructor.id}`}>
                    <span className="text-lightViolet underline">
                      {instructor.title}
                    </span>
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
        <div id="lastUpdated" className="flex gap-x-3 items-center mb-2">
          <img className="w-4 h-4" src={exclamition} alt="exclamation" />
          {`Last updated `}
          {`${Number(
            selectedCourseSummary?.last_update_date?.split("-")[1]
          )}/${Number(selectedCourseSummary?.last_update_date?.split("-")[0])}`}
        </div>
        <div id="courseLanguage" className="flex gap-x-3 items-center mb-2">
          <img className="w-4 h-4" src={language} alt="language" />
          {selectedCourseSummary?.locale?.title}
        </div>
        <div
          id="courseCaptions"
          className="flex gap-x-3 items-center md:pb-10 sm:pb-4 xs:mb-4"
        >
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
        <AddToCart
          price={selectedCourseSummary?.price?.discount_price?.price_string}
        />
      </div>
    </div>
  );
};

export default CourseHeader;
