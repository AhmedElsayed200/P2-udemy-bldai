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
    if (courseDescription.classList.contains("h-80"))
      courseDescription.classList.remove("h-80");
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
    if (!courseDescription.classList.contains("h-80"))
      courseDescription.classList.add("h-80");
    showMoreBtn.classList.toggle("hidden");
    showLessBtn.classList.toggle("hidden");
  };

  return (
    <div
      id="courseDescriptionContainer"
      className="w-11/12 max-w-3xl sm:w-4/5 lg:ml-20 xs:mx-auto mb-4"
    >
      <div id="courseDescriptionContent" className="h-80 truncate">
        <div id="courseDescriptionTxt" className="mb-4">
          <div id="courseDescriptionTitle" className="font-bold text-3xl mb-3">
            Description
          </div>
          <pre className="overflow-x-auto leading-2">
            {selectedCourseDescription}
          </pre>
        </div>
        <div id="forWho">
          <div id="forWhoTitle" className="font-bold text-3xl mb-3">
            Who this course is for:
          </div>
          <pre id="forWhoTxt" className="leading-7 overflow-x-auto">
            {selectedCourseForWho}
          </pre>
        </div>
      </div>
      <button
        id="showMoreBtn"
        className="text-darkViolet font-bold text-lg"
        onClick={showMore}
      >
        Show more
      </button>
      <button
        id="showLessBtn"
        className="hidden text-darkViolet font-bold text-lg"
        onClick={showLess}
      >
        Show less
      </button>
    </div>
  );
};

export default CourseDescription;
