import uparrowIcon from "../../../Resources/SVGs/up-arrow.svg";
import downarrowIcon from "../../../Resources/SVGs/down-arrow.svg";
/* import functions used in this component */
import {
  showMoreCourseDesc,
  showLessCourseDesc,
} from "../../../Resources/Assets/index";

const CourseDescription = ({
  selectedCourseDescription,
  selectedCourseForWho,
}) => {
  return (
    <div
      id="courseDescriptionContainer"
      className="w-11/12 max-w-3xl sm:w-4/5 lg:ml-32 xs:mx-auto mb-4"
    >
      <div id="courseDescriptionContent" className="h-80 overflow-hidden">
        {/* course description */}
        <div id="courseDescriptionTxt" className="mb-4">
          <div id="courseDescriptionTitle" className="font-bold text-3xl mb-3">
            Description
          </div>
          <div className="overflow-x-auto leading-2">
            {selectedCourseDescription}
          </div>
        </div>
        {/* who this course for */}
        <div id="forWho">
          <div id="forWhoTitle" className="font-bold text-3xl mb-3">
            Who this course is for:
          </div>
          <div id="forWhoTxt" className="leading-7 overflow-x-auto">
            {selectedCourseForWho}
          </div>
        </div>
      </div>
      {/* buttons to show more or less about the course description */}
      <button
        id="showMoreBtn"
        className="text-darkViolet font-bold text-lg flex items-center gap-x-2"
        onClick={showMoreCourseDesc}
      >
        Show more
        <img src={downarrowIcon} alt="arrow downhead" className="w-3 h-3" />
      </button>
      <button
        id="showLessBtn"
        className="hidden text-darkViolet font-bold text-lg flex items-center gap-x-2"
        onClick={showLessCourseDesc}
      >
        Show less
        <img src={uparrowIcon} alt="arrow downhead" className="w-3 h-3" />
      </button>
    </div>
  );
};

export default CourseDescription;
