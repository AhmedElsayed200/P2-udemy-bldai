import HomeHeader from "../../Widgets/Home Header";
import CoursesSection from "../../Widgets/Courses Section";
import TopCategories from "../../Widgets/Top Categories";

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
