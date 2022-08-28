import React from "react";
import Card from "../Card/Card";
import Style from "../../Resources/Styling/Courses.module.css";

const Cards = (props) => {
  const courseCards = props.coursesData.map((courseInfo) => {
    return <Card key={courseInfo.id} courseInfo={courseInfo} />;
  });

  return <div className={Style.cardsContainer}>{courseCards}</div>;
};

export default Cards;
