import Rating from "@mui/material/Rating";
import Style from "../../Resources/Styling/Courses.module.css";

const Card = ({ courseInfo }) => {

  return (
    <div className={Style.card}>
      <div className={Style.img}>
        <img src={courseInfo.image} alt={courseInfo.title} />
        <div className={Style.filter}></div>
      </div>
      <div className={Style.title}>{courseInfo.title}</div>
      <div className={Style.author}>{courseInfo.author}</div>
      <div className={Style.rating}>
        <span className={Style.rate}>{courseInfo.rate}</span>
        <Rating
          name="read-only"
          value={courseInfo.rate}
          precision={0.5}
          readOnly
        />
        <span className={Style.raters}>{courseInfo.noOfRaters}</span>
      </div>
      <div className={Style.newPrice}>{courseInfo.newPrice}</div>
      <div className={Style.oldPrice}>{courseInfo.oldPrice}</div>
      {courseInfo.bestSeller && (
        <div className={Style.bestSeller}>Best Seller</div>
      )}
    </div>
  )
};

export default Card;
