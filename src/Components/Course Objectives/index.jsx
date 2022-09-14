const CourseObjectives = ({ selectedCourseSummary }) => {
  return (
    <div
      id="courseObjectives"
      className="border-lightGray border-2 max-w-3xl w-11/12 sm:w-4/5 p-4 lg:ml-32 xs:mx-auto sm:mt-10 lg:w-2/4"
    >
      <div id="courseObjectivesContent">
        <div className="font-bold text-3xl mb-3">What you'll learn</div>
        <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-4">
          {selectedCourseSummary.objectives_summary?.map((objective) => {
            return (
              <li
                key={objective}
                className="before:content-['✓'] before:mr-5 text-black"
              >
                {objective}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CourseObjectives;
