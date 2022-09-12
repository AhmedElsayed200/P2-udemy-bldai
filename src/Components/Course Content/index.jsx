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

  /* function to expand all sections */
  const expandAllSections = () => {
    const allSections = document.getElementsByClassName("section");
    const expandBtn = document.getElementById("expandAllSectionsBtn");
    const collapseBtn = document.getElementById("collapseAllSectionsBtn");
    for (let ele of allSections) {
      if (ele.classList.contains("hidden")) ele.classList.toggle("hidden");
    }
    expandBtn.classList.toggle("hidden");
    collapseBtn.classList.toggle("hidden");
  };

  /* function to collapse all sections */
  const collapseAllSections = () => {
    const allSections = document.getElementsByClassName("section");
    const expandBtn = document.getElementById("expandAllSectionsBtn");
    const collapseBtn = document.getElementById("collapseAllSectionsBtn");
    for (let ele of allSections) {
      if (!ele.classList.contains("hidden")) ele.classList.add("hidden");
    }
    expandBtn.classList.toggle("hidden");
    collapseBtn.classList.toggle("hidden");
  };

  /* function to toggle single section */
  const toggleSection = (id) => {
    const section = document.getElementById(id);
    section.classList.toggle("hidden");
  };

  return (
    <div
      id="courseContentContainer"
      className="px-0 mt-8 max-w-3xl w-11/12 sm:w-4/5 lg:ml-20 xs:mx-auto lg:w-2/4"
    >
      <div className="font-ubuntu font-bold text-3xl mb-4">Course content</div>
      <div className="flex md:flex-row xs:flex-col gap-y-4 md:justify-between mb-3">
        <div className="w-fit text-lg">
          {`${data?.sections?.length} sections • ${
            data?.num_of_published_lectures
          } lectures • ${secondsToHms(
            data?.estimated_content_length_in_seconds,
            ["h ", "m "]
          )} total length`}
        </div>
        <div className="text-darkViolet font-bold w-fit">
          <button id="expandAllSectionsBtn" onClick={expandAllSections}>
            Expand all sections
          </button>
          <button
            id="collapseAllSectionsBtn"
            className="hidden"
            onClick={collapseAllSections}
          >
            Collapse all sections
          </button>
        </div>
      </div>
      <div>
        {data?.sections?.map((section, indx) => {
          return (
            <div key={`courseContentRow${indx}`} id={`courseContentRow${indx}`}>
              <div
                onClick={() => toggleSection(`section${indx}`)}
                className="flex justify-between bg-thinGray py-2 px-3 border-2 border-lightGray cursor-pointer -my-2"
              >
                <div className="text-lg font-bold">{section.title}</div>
                <div className="xs:hidden sm:block">
                  {`${section.lecture_count} lectures • `}
                  {secondsToHms(section.content_length, ["hr ", "min "])}
                </div>
              </div>
              <div
                id={`section${indx}`}
                className="section hidden border-x-2 border-lightGray"
              >
                {section.items?.map((lecture) => {
                  return (
                    <div
                      key={lecture.className}
                      className="flex justify-between px-3 py-2 "
                    >
                      <div className="w-4/5">{lecture.title}</div>
                      {lecture.can_be_previewed && (
                        <button className="underline text-darkViolet xs:hidden md:block">
                          Preview
                        </button>
                      )}
                      <div className="xs:hidden sm:block">
                        {lecture.content_summary}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;
