import "./App.css";
import "./Resources/Styling/index.css";
import Navbar from "./Components/Widgets/Navbar";
import HomePage from "./Components/Pages/Home Page";
import CoursePage from "./Components/Pages/Single Course Page";
import Footer from "./Components/Widgets/Footer";
import {
  Routes,
  Route,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { data, summary, review } from "./Resources/APIs/APIs";

const App = () => {
  const [coursesSummary, setCoursesSummary] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [coursesReview, setCoursesReview] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    /* fetch courses summary */
    fetch(summary)
      .then((response) => response.json())
      .then((result) => {
        console.log("fetching Summary: ", result);
        setCoursesSummary(result);
      });
    /* fetch courses content */
    fetch(data)
      .then((response) => response.json())
      .then((result) => {
        console.log("fetching Data: ", result);
        setCoursesData(result);
      });
    /* fetch courses review */
    fetch(review)
      .then((response) => response.json())
      .then((result) => {
        console.log("fetching Review: ", result);
        setCoursesReview(result);
      });
  }, []);

  const searchForCourse = (params) => {
    if (params !== "")
      navigate({
        pathname: "",
        search: createSearchParams({
          keywards: params,
        }).toString(),
      });
    else navigate("/");
  };

  return (
    <div className="App">
      <Navbar searchForCourse={searchForCourse} />
      <Routes>
        <Route
          path="/"
          element={<HomePage coursesSummary={coursesSummary} />}
        />
        <Route
          path="/course/:courseURL"
          element={
            <CoursePage
              coursesSummary={coursesSummary}
              coursesData={coursesData}
              coursesReview={coursesReview}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
