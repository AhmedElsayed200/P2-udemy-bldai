/* import functions used in this component */
import {
  secondsToHms,
  expandAllSections,
  collapseAllSections,
  toggleSection,
} from "../../../Resources/Assets/index";
const CourseContent = ({ selectedCourseCurriculum }) => {
  /* get data from the selectedCourseContent */
  const data = selectedCourseCurriculum?.data;

  return (
    <div
      id="courseContentContainer"
      className="px-0 my-8 max-w-3xl w-11/12 sm:w-4/5 lg:ml-32 xs:mx-auto lg:w-2/4"
    >
      <div className="font-bold text-3xl mb-4">Course content</div>
      {/* course content header */}
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
          {/* buttons to expand or collaps course content */}
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
      {/* course data sections */}
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
                className="section hidden border-b-2 border-x-2 border-lightGray"
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
