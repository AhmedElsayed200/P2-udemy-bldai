import HomeHeader from "../../Components/Home Header";
import CoursesSection from "../../Components/Courses Section";
import TopCategories from "../../Components/Top Categories";

const HomePage = ({ coursesData }) => {
  return (
    <>
      <HomeHeader />
      <CoursesSection coursesData={coursesData} />
      <TopCategories />
    </>
  );
};

export default HomePage;
