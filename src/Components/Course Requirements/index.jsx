const CourseRequirements = ({ selectedCourseRequirements }) => {
  console.log("selectedCourseRequirements: ", selectedCourseRequirements);
  return (
    <div
      id="courseRequirementsContainer"
      className="w-11/12 max-w-3xl sm:w-4/5 lg:ml-20 xs:mx-auto lg:w-2/4 mb-4"
    >
      <div id="courseRequirementsContent">
        <div id="courseRequirementsHeader" className="font-bold text-3xl mb-4">
          Requirements
        </div>
        <ul className="list-disc list-inside">
          {selectedCourseRequirements?.map((requirement, indx) => {
            return (
              <li key={`${requirement}${indx}`} className="mb-2">
                {requirement}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CourseRequirements;
