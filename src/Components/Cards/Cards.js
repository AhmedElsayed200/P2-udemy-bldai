import React from "react";
import Card from "../Card/Card";

const Cards = (props) => {
  const courseCards = props.coursesData.map((courseInfo) => {
    return <Card key={courseInfo.id} courseInfo={courseInfo} />;
  });

  return <div>{courseCards}</div>;
};

export default Cards;
