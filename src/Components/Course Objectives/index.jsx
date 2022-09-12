const CourseObjectives = ({ selectedCourseSummary }) => {
  return (
    <div
      id="courseObjectives"
      className="container border-lightGray border-2 w-3/4 p-4 md:ml-20 xs:mx-auto sm:mt-10 md:w-2/4"
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
