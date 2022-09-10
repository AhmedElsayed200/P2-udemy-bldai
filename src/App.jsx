import "./App.css";
import "./Resources/Styling/index.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home Page";
import CoursePage from "./Pages/Single Course Page";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { data, summary, review } from "./Resources/APIs/APIs";

const App = () => {
  const [coursesSummary, setCoursesSummary] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [coursesReview, setCoursesReview] = useState([]);

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

  return (
    <div className="App">
      <Navbar />
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
    </div>
  );
};

export default App;
