import HomeHeader from "../../Components/Home Header";
import CoursesSection from "../../Components/Courses Section";
import TopCategories from "../../Components/Top Categories";

const HomePage = ({ coursesSummary }) => {
  return (
    <>
      <HomeHeader />
      <CoursesSection coursesSummary={coursesSummary} />
      <TopCategories />
    </>
  );
};

export default HomePage;
