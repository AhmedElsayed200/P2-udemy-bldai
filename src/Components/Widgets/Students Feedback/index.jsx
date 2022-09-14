import { useState } from "react";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";

const StudentsFeedback = ({ selectedCourseReview }) => {
  console.log("selectedCourseReview: ", selectedCourseReview);
  const [totalReviewers, setTotalReviewers] = useState(1);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    setAverageRating(selectedCourseReview?.averageRating?.toFixed(1));
    let totalReviewers = selectedCourseReview?.ratingDistribution?.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.count;
      },
      0
    );
    setTotalReviewers(totalReviewers);
  }, [
    selectedCourseReview?.averageRating,
    selectedCourseReview?.ratingDistribution,
    totalReviewers,
  ]);

  return (
    <div id="studentsFeedbackContainer">
      {/* course detailed ratings */}
      <div id="courseRatingFeedback">
        <div>Student feedback</div>
        <div id="averageRating">
          <div>{averageRating}</div>
          <div>
            <Rating
              name="read-only"
              value={averageRating}
              precision={0.5}
              readOnly
            />
          </div>
          <div>Course Rating</div>
        </div>
        <div id="ratingDetails">
          {selectedCourseReview?.ratingDistribution
            ?.slice(0)
            .reverse()
            .map((rate) => {
              return (
                <div key={`rate${rate.rating}`}>
                  <Rating
                    name="read-only"
                    value={rate.rating}
                    precision={0.5}
                    readOnly
                  />
                  <div>{Math.round((rate.count / totalReviewers) * 100)}%</div>
                </div>
              );
            })}
        </div>
      </div>
      {/* students reviews */}
      <div id="studentsCommentsContainer">
        <div>Reviews</div>
        <div id="studentsComments">
          {selectedCourseReview?.results?.map((review) => {
            return (
              <div key={review.id}>
                {/*profile picture */}
                <div>
                  <img
                    src={review.user?.image_50x50}
                    alt={review.display_name}
                  />
                </div>
                {/* review details */}
                <div>
                  <div>{review.user?.public_display_name}</div>
                  <div>
                    <Rating
                      name="read-only"
                      value={review.rating}
                      precision={0.5}
                      readOnly
                    />
                    <div>{review.created_formatted_with_time_since}</div>
                  </div>
                  <div>{review.content}</div>
                  <div>Was this review helpful?</div>
                  <div>
                    <button>Like</button>
                    <button>Dislike</button>
                    <div>Report</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentsFeedback;
