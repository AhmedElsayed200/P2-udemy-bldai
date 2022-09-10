import Style from "../../Resources/Styling/Courses.module.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const Cards = ({ items }) => {
  return (
    <div className={Style.cardsContainer}>
      {items.map((courseInfo) => {
        return (
          <Link
            className="no-underline black hover:text-black visited:text-black"
            key={courseInfo.id}
            to={courseInfo.url}
          >
            <div className={Style.card}>
              {/* course image */}
              <div className={Style.img}>
                <img src={courseInfo.image_240x135} alt={courseInfo.title} />
                <div className={Style.filter}></div>
              </div>
              {/* course title */}
              <div className={Style.title}>{courseInfo.title}</div>
              {/* course authors */}
              <div className={Style.author}>
                {courseInfo.visible_instructors.map((instructor, indx) => {
                  return (
                    <span key={instructor.id} className={Style.author}>
                      {instructor.title}
                      {indx < courseInfo.visible_instructors.length - 1
                        ? ", "
                        : ""}
                    </span>
                  );
                })}
              </div>
              {/* course rating */}
              <div className={Style.rating}>
                <span className={Style.rate}>
                  {Math.round(courseInfo.rating * 10) / 10}
                </span>
                <Rating
                  name="read-only"
                  value={Math.round(courseInfo.rating * 10) / 10}
                  precision={0.5}
                  readOnly
                />
                <span
                  className={Style.raters}
                >{`(${courseInfo.num_reviews})`}</span>
              </div>
              {/* course prices */}
              <div className={Style.newPrice}>
                {courseInfo.price?.discount_price?.price_string}
              </div>
              <div className={Style.oldPrice}>
                {courseInfo.price?.list_price?.price_string}
              </div>
              {/* course badges */}
              {courseInfo.badges.map((badge) => {
                return (
                  <div key={badge.id} className={Style.bestSeller}>
                    {badge.badge_text}
                  </div>
                );
              })}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
