/* function to convert seconds to hours, minutes, and seconds */
export const secondsToHms = (d, time) => {
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
export const expandAllSections = () => {
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
export const collapseAllSections = () => {
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
export const toggleSection = (id) => {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
};

/* function to show more about course description */
export const showMoreCourseDesc = () => {
  const courseDescription = document.getElementById("courseDescriptionContent");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const showLessBtn = document.getElementById("showLessBtn");
  if (
    courseDescription.classList.contains("h-80") &&
    courseDescription.classList.contains("overflow-hidden")
  ) {
    courseDescription.classList.remove("h-80");
    courseDescription.classList.remove("overflow-hidden");
  }
  showMoreBtn.classList.toggle("hidden");
  showLessBtn.classList.toggle("hidden");
};

/* function to show less about course description */
export const showLessCourseDesc = () => {
  const courseDescription = document.getElementById("courseDescriptionContent");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const showLessBtn = document.getElementById("showLessBtn");
  if (
    !courseDescription.classList.contains("h-80") &&
    !courseDescription.classList.contains("overflow-hidden")
  ) {
    courseDescription.classList.add("h-80");
    courseDescription.classList.add("overflow-hidden");
  }
  showMoreBtn.classList.toggle("hidden");
  showLessBtn.classList.toggle("hidden");
};

/* function to show less about instructor info */
export const showMoreInstruInfo = (
  instructorInfoId,
  showMoreBtnId,
  showLessBtnId
) => {
  const instructorInfo = document.getElementById(instructorInfoId);
  const showMoreBtn = document.getElementById(showMoreBtnId);
  const showLessBtn = document.getElementById(showLessBtnId);
  if (
    instructorInfo.classList.contains("h-20") &&
    instructorInfo.classList.contains("overflow-hidden")
  ) {
    instructorInfo.classList.remove("h-20");
    instructorInfo.classList.remove("overflow-hidden");
  }
  showMoreBtn.classList.toggle("hidden");
  showLessBtn.classList.toggle("hidden");
};

/* function to show less about instructor info */
export const showLessInstruInfo = (
  instructorInfoId,
  showMoreBtnId,
  showLessBtnId
) => {
  const instructorInfo = document.getElementById(instructorInfoId);
  const showMoreBtn = document.getElementById(showMoreBtnId);
  const showLessBtn = document.getElementById(showLessBtnId);
  if (
    !instructorInfo.classList.contains("h-20") &&
    !instructorInfo.classList.contains("overflow-hidden")
  ) {
    instructorInfo.classList.add("h-20");
    instructorInfo.classList.add("overflow-hidden");
  }
  showMoreBtn.classList.toggle("hidden");
  showLessBtn.classList.toggle("hidden");
};

/* function to search for any course. 
  if your search keywords match any of the headline 
  and title section, the course would appear */
export const search = (items, searchParams, searchTerm) => {
  return items.filter((item) => {
    return searchTerm.some((newItem) => {
      let keyWord = searchParams.get("keywards") || "";
      return (
        item[newItem].toString().toLowerCase().indexOf(keyWord.toLowerCase()) >
        -1
      );
    });
  });
};
