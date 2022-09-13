const CourseInstructors = ({ selectedCourseInstructors }) => {
  console.log("selectedCourseInstructors: ", selectedCourseInstructors);
  return (
    <div id="courseInstructorsContainer">
      <div id="courseInstructorsContent">
        <div>Instructors</div>
        <div id="courseInstructorsInfo">
          {selectedCourseInstructors.map((instructor, indx) => {
            return (
              <div id={`instructor${indx}`} key={instructor.id}>
                <div id="instructorName">{instructor.title}</div>
                <div id="instructorJobTitle">{instructor.job_title}</div>
                <div id="instructorSummaryContainer">
                  <div id="instructorImgContainer">
                    <img
                      src={instructor.image_100x100}
                      alt={instructor.title}
                    />
                  </div>
                  <div id="instructorSummaryContent">
                    <div id="instructorRating">
                      <img src="" alt="" />
                      <div>
                        {instructor.Instructor_Rating}
                        {` Instructor Rating`}
                      </div>
                    </div>
                    <div id="instructorReviews">
                      <img src="" alt="" />
                      <div>
                        {instructor.Reviews}
                        {` Reviews`}
                      </div>
                    </div>
                    <div id="instructorStudentsNum">
                      <img src="" alt="" />
                      <div>
                        {instructor.Students}
                        {` Students`}
                      </div>
                    </div>
                    <div id="instructorCoursesNum">
                      <img src="" alt="" />
                      <div>
                        {instructor.Courses}
                        {` Courses`}
                      </div>
                    </div>
                  </div>
                </div>
                <div id="instructorDescription">
                  <div>{instructor.description}</div>
                </div>
                <button
                  id="showMoreBtnInstructorDescription"
                  className="text-darkViolet font-bold text-lg"
                >
                  Show more
                </button>
                <button
                  id="showLessBtnInstructorDescription"
                  className="hidden text-darkViolet font-bold text-lg"
                >
                  Show less
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
