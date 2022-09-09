import './App.css';
import "./Resources/Styling/index.css"
import Navbar from './Components/Navbar';
import HomePage from './Pages/Home Page';
import CoursePage from './Pages/Single Course Page';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { data, summary, review } from "./Resources/APIs/APIs"

const App = () => {

  const [coursesData, setcoursesData] = useState([]);

  useEffect(() => {
    fetch(summary)
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        setcoursesData(result);
      })
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage coursesData={coursesData} />} />
        <Route path='/:courseURL' element={<CoursePage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
