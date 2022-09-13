import uparrowIcon from "../../Resources/SVGs/up-arrow.svg";
import downarrowIcon from "../../Resources/SVGs/down-arrow.svg";

const CourseDescription = ({
  selectedCourseDescription,
  selectedCourseForWho,
}) => {
  console.log("selectedCourseDescription: ", selectedCourseDescription);
  console.log("selectedCourseForWho: ", selectedCourseForWho);

  /* function to show more about description */
  const showMore = () => {
    const courseDescription = document.getElementById(
      "courseDescriptionContent"
    );
    const showMoreBtn = document.getElementById("showMoreBtn");
    const showLessBtn = document.getElementById("showLessBtn");
    if (
      courseDescription.classList.contains("h-80") &&
      courseDescription.classList.contains("overflow-hidden")
    ) {
      courseDescription.classList.remove("h-80");
      courseDescription.classList.remove("overflow-hidden");
    }
    showMoreBtn.classList.toggle("hidden");
    showLessBtn.classList.toggle("hidden");
  };

  /* function to show less about description */
  const showLess = () => {
    const courseDescription = document.getElementById(
      "courseDescriptionContent"
    );
    const showMoreBtn = document.getElementById("showMoreBtn");
    const showLessBtn = document.getElementById("showLessBtn");
    if (
      !courseDescription.classList.contains("h-80") &&
      !courseDescription.classList.contains("overflow-hidden")
    ) {
      courseDescription.classList.add("h-80");
      courseDescription.classList.add("overflow-hidden");
    }
    showMoreBtn.classList.toggle("hidden");
    showLessBtn.classList.toggle("hidden");
  };

  return (
    <div
      id="courseDescriptionContainer"
      className="w-11/12 max-w-3xl sm:w-4/5 lg:ml-20 xs:mx-auto mb-4"
    >
      <div id="courseDescriptionContent" className="h-80 overflow-hidden">
        <div id="courseDescriptionTxt" className="mb-4">
          <div id="courseDescriptionTitle" className="font-bold text-3xl mb-3">
            Description
          </div>
          <div className="overflow-x-auto leading-2">
            {selectedCourseDescription}
          </div>
        </div>
        <div id="forWho">
          <div id="forWhoTitle" className="font-bold text-3xl mb-3">
            Who this course is for:
          </div>
          <div id="forWhoTxt" className="leading-7 overflow-x-auto">
            {selectedCourseForWho}
          </div>
        </div>
      </div>
      <button
        id="showMoreBtn"
        className="text-darkViolet font-bold text-lg flex items-center gap-x-2"
        onClick={showMore}
      >
        Show more
        <img src={downarrowIcon} alt="arrow downhead" className="w-3 h-3" />
      </button>
      <button
        id="showLessBtn"
        className="hidden text-darkViolet font-bold text-lg flex items-center gap-x-2"
        onClick={showLess}
      >
        Show less
        <img src={uparrowIcon} alt="arrow downhead" className="w-3 h-3" />
      </button>
    </div>
  );
};

export default CourseDescription;
