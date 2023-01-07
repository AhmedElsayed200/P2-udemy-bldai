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

/* function to handle UI while scrolling */
export const handleScroll = () => {
  const position = window.pageYOffset;
  const sideBar = document.getElementById("sideBarContainer");
  const sideBarImg = document.getElementById("sideBarImg");
  const courseHeadStick = document.getElementById("courseHeadStick");
  const navCourseContainer = document.getElementById("navCourseContainer");
  if (position > 0 && position < 75) {
    if (!courseHeadStick.classList.contains("hidden"))
      courseHeadStick.classList.add("hidden");
    if (sideBarImg.classList.contains("hidden"))
      sideBarImg.classList.remove("hidden");
  } else if (position >= 75 && position < 370) {
    if (sideBarImg.classList.contains("hidden"))
      sideBarImg.classList.remove("hidden");
    if (courseHeadStick.classList.contains("hidden"))
      courseHeadStick.classList.remove("hidden");
    if (sideBar.classList.contains("fixed")) {
      sideBar.classList.remove("fixed");
      sideBar.classList.add("absolute");
      sideBar.classList.remove("top-5");
      sideBar.classList.add("top-28");
      sideBar.classList.remove("z-10");
      navCourseContainer.classList.remove("fixed");
    }
  } else if (position >= 370) {
    if (!sideBarImg.classList.contains("hidden"))
      sideBarImg.classList.add("hidden");
    if (sideBar.classList.contains("absolute")) {
      sideBar.classList.remove("absolute");
      sideBar.classList.add("fixed");
      sideBar.classList.add("top-5");
      sideBar.classList.remove("top-28");
      sideBar.classList.add("z-10");
      navCourseContainer.classList.add("fixed");
    }
  }
};
