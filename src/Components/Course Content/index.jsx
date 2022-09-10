const CourseContent = ({ selectedCourseCurriculum }) => {
  console.log("selectedCourseCurriculum: ", selectedCourseCurriculum);

  /* get data from the selectedCourseContent */
  const data = selectedCourseCurriculum?.data;

  /* function to convert seconds to hours, minutes, and seconds */
  const secondsToHms = (d, time) => {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.ceil((d % 3600) / 60);
    // let s = Math.ceil((d % 3600) % 60);

    let hDisplay = h > 0 ? h + time[0] : "";
    let mDisplay = m > 0 ? m + time[1] : "";
    // let sDisplay = s > 0 ? s + "sec " : "";
    return hDisplay + mDisplay;
  };

  return (
    <div id="courseContentContainer">
      <div className="courseContentText">Course content</div>
      <div className="courseContentHeadline">
        <div className="courseContentInfoSummary">
          {`${data?.sections?.length} sections . ${
            data?.num_of_published_lectures
          } lectures . ${secondsToHms(
            data?.estimated_content_length_in_seconds,
            ["h ", "m "]
          )} total length`}
        </div>
        <div className="courseContentExpandAll">
          <button>Expand all sections</button>
        </div>
      </div>
      <div className="courseContentDetailsContainer">
        {data?.sections?.map((section, indx) => {
          return (
            <div key={`courseContentRow${indx}`} id={`courseContentRow${indx}`}>
              <div className="courseContentDetailsHeader">
                <div className="courseContentTitle">{section.title}</div>
                <div className="sectionLength">
                  {`${section.lecture_count} lectures . `}
                  {secondsToHms(section.content_length, ["hr ", "min "])}
                </div>
              </div>
              {section.items?.map((lecture) => {
                return (
                  <div
                    key={lecture.className}
                    className="courseContentDetailsLectures"
                  >
                    <div>{lecture.title}</div>
                    {lecture.can_be_previewed && <button>Preview</button>}
                    <div>{lecture.content_summary}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;
