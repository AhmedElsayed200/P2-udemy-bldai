import { useState } from "react";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";

const Navigation = ({ title, rate, nOfRaters, nOfStudents }) => {
  const [rateD, setRateD] = useState(1);

  useEffect(() => {
    setRateD(rate);
  }, [rate]);

  return (
    <div id="coursePageNav">
      <div
        id="courseHeadStick"
        className="w-full z-10 bg-lightBlack p-4 mb-4 fixed top-0"
      >
        <div className="text-white font-bold text-lg">{title}</div>
        <div className="flex gap-2 items-center">
          <div className="text-yellow font-bold">{rate?.toFixed(1)}</div>
          <div>
            <Rating name="read-only" value={rateD} precision={0.5} readOnly />
          </div>
          <div className="text-lightViolet underline">{`(${nOfRaters} ratings)`}</div>
          <div className="text-white">{`${nOfStudents} students`}</div>
        </div>
      </div>
      <div
        id="navCourseContainer"
        className="bg-white shadow-[0_4px_2px_-2px_lightGray] top-20 w-full"
      >
        <ul className="flex text-lg text-darkGray font-bold lg:pl-32 pt-4">
          <a
            href="#courseObjectives"
            className="px-8 pb-3 cursor-pointer hover:text-black hover:border-b-2 hover:border-b-black"
          >
            Overview
          </a>
          <a
            href="#courseContentContainer"
            className="px-8 pb-3 cursor-pointer hover:text-black hover:border-b-2 hover:border-b-black"
          >
            Cirriculum
          </a>
          <a
            href="#courseInstructorsContainer"
            className="px-8 pb-3 cursor-pointer hover:text-black hover:border-b-2 hover:border-b-black"
          >
            Instructor
          </a>
          <a
            href="#studentsFeedbackContainer"
            className="px-8 pb-3 cursor-pointer hover:text-black hover:border-b-2 hover:border-b-black"
          >
            Reviews
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
