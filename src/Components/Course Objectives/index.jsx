const CourseObjectives = ({ selectedCourseSummary }) => {
  return (
    <div id="courseObjectives">
      <div id="courseObjectivesContent">
        <div>What you'll learn</div>
        <ul>
          {selectedCourseSummary.objectives_summary?.map((objective) => {
            return <li key={objective}>{objective}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CourseObjectives;
