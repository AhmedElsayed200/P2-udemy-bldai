import starIcon from "../../../Resources/SVGs/star.svg";
import certificationIcon from "../../../Resources/SVGs/certificate.svg";
import peopleIcon from "../../../Resources/SVGs/people.svg";
import playbtnIcon from "../../../Resources/SVGs/play-button.svg";
import downarrowIcon from "../../../Resources/SVGs/down-arrow.svg";
import uparrowIcon from "../../../Resources/SVGs/up-arrow.svg";
/* import functions used in this component */
import {
  showMoreInstruInfo,
  showLessInstruInfo,
} from "../../../Resources/Assets/index";

const CourseInstructors = ({ selectedCourseInstructors }) => {
  return (
    <div
      id="courseInstructorsContainer"
      className="w-11/12 max-w-3xl sm:w-4/5 lg:ml-32 xs:mx-auto mb-4"
    >
      <div id="courseInstructorsContent">
        <div className="font-bold text-3xl mb-3">Instructors</div>
        <div id="courseInstructorsInfo">
          {selectedCourseInstructors?.map((instructor, indx) => {
            return (
              <div key={instructor.id} className="mb-4">
                {/* instructor name and job title */}
                <div className="text-darkViolet font-bold underline text-xl">
                  {instructor.title}
                </div>
                <div className="mb-2">{instructor.job_title}</div>
                {/* instructor info summary */}
                <div className="flex gap-x-2 items-center	mb-2">
                  {/* instructor picture */}
                  <div>
                    <img
                      className="rounded-full mr-2"
                      src={instructor.image_100x100}
                      alt={instructor.title}
                    />
                  </div>
                  {/* summary info */}
                  <div>
                    <div className="flex gap-x-2 items-center mb-2">
                      <img src={starIcon} alt="star icon" className="w-4 h-4" />
                      <div>
                        {instructor.Instructor_Rating}
                        {` Instructor Rating`}
                      </div>
                    </div>
                    <div className="flex gap-x-2 items-center mb-2">
                      <img
                        src={certificationIcon}
                        alt="certification icon"
                        className="w-4 h-4"
                      />
                      <div>
                        {instructor.Reviews}
                        {` Reviews`}
                      </div>
                    </div>
                    <div className="flex gap-x-2 items-center mb-2">
                      <img
                        src={peopleIcon}
                        alt="people icon"
                        className="w-4 h-4"
                      />
                      <div>
                        {instructor.Students}
                        {` Students`}
                      </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <img
                        src={playbtnIcon}
                        alt="play button icon"
                        className="w-4 h-4"
                      />
                      <div>
                        {instructor.Courses}
                        {` Courses`}
                      </div>
                    </div>
                  </div>
                </div>
                {/* instrcutor description */}
                <div>
                  <div
                    id={`instructorInfo${indx}`}
                    className="h-20 overflow-hidden mb-2"
                  >
                    {instructor.description}
                  </div>
                </div>
                {/* show more or less about instructor description */}
                <button
                  id={`showMoreBtnInstructorInfo${indx}`}
                  className="text-darkViolet font-bold text-lg flex items-center gap-x-2"
                  onClick={() =>
                    showMoreInstruInfo(
                      `instructorInfo${indx}`,
                      `showMoreBtnInstructorInfo${indx}`,
                      `showLessBtnInstructorInfo${indx}`
                    )
                  }
                >
                  Show more
                  <img
                    src={downarrowIcon}
                    alt="arrow downhead"
                    className="w-3 h-3"
                  />
                </button>
                <button
                  id={`showLessBtnInstructorInfo${indx}`}
                  className="hidden text-darkViolet font-bold text-lg flex items-center gap-x-2"
                  onClick={() =>
                    showLessInstruInfo(
                      `instructorInfo${indx}`,
                      `showMoreBtnInstructorInfo${indx}`,
                      `showLessBtnInstructorInfo${indx}`
                    )
                  }
                >
                  Show less{" "}
                  <img
                    src={uparrowIcon}
                    alt="arrow downhead"
                    className="w-3 h-3"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseInstructors;
