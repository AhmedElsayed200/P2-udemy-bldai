import React from "react";

const Card = (props) => {
  const courseCard = (
    <div>
      <div>
        <img src={props.courseInfo.image} alt={props.courseInfo.title} />
        <div className="filter"></div>
      </div>
      <div>{props.courseInfo.title}</div>
      <div>{props.courseInfo.author}</div>
      <div>
        <span>{props.courseInfo.rate}</span>
        {/* stars */}
        <span>{props.courseInfo.noOfRaters}</span>
      </div>
      <div>{props.courseInfo.newPrice}</div>
      <div>{props.courseInfo.oldPrice}</div>
    </div>
  );

  return <>{courseCard}</>;
};

export default Card;
