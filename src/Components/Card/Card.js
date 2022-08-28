import React from "react";
import Rating from "@mui/material/Rating";
import Style from "../../Resources/Styling/Courses.module.css";

const Card = (props) => {
  const courseCard = (
    <div className={Style.card}>
      <div className={Style.img}>
        <img src={props.courseInfo.image} alt={props.courseInfo.title} />
        <div className={Style.filter}></div>
      </div>
      <div className={Style.title}>{props.courseInfo.title}</div>
      <div className={Style.author}>{props.courseInfo.author}</div>
      <div className={Style.rating}>
        <span className={Style.rate}>{props.courseInfo.rate}</span>
        <Rating
          name="read-only"
          value={props.courseInfo.rate}
          precision={0.5}
          readOnly
        />
        <span className={Style.raters}>{props.courseInfo.noOfRaters}</span>
      </div>
      <div className={Style.newPrice}>{props.courseInfo.newPrice}</div>
      <div className={Style.oldPrice}>{props.courseInfo.oldPrice}</div>
      {props.courseInfo.bestSeller && (
        <div className={Style.bestSeller}>Best Seller</div>
      )}
    </div>
  );

  return <>{courseCard}</>;
};

export default Card;
