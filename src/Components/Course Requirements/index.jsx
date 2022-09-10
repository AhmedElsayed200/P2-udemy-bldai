const CourseRequirements = ({ selectedCourseRequirements }) => {
  console.log("selectedCourseRequirements: ", selectedCourseRequirements);
  return (
    <div id="courseRequirementsContainer">
      <div id="courseRequirementsContent">
        <div id="courseRequirementsHeader">Requirements</div>
        <ul>
          {selectedCourseRequirements?.map((requirement, indx) => {
            return <li key={`${requirement}${indx}`}>{requirement}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CourseRequirements;
