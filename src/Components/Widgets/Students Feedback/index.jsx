import { useState } from "react";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";
import { LikeIcon, DislikeIcon } from "../SVGs Components";

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

  const showMoreReviews = () => {
    const feedbackContainer = document.getElementById("studentsComments");
    const showMoreBtn = document.getElementById("showMoreBtnRev");
    const showLessBtn = document.getElementById("showLessBtnRev");
    if (feedbackContainer.classList.contains("h-80")) {
      feedbackContainer.classList.remove("h-80");
      feedbackContainer.classList.remove("overflow-hidden");
    }
    showMoreBtn.classList.toggle("hidden");
    showLessBtn.classList.toggle("hidden");
  };

  const showLessReviews = () => {
    const feedbackContainer = document.getElementById("studentsComments");
    const showMoreBtn = document.getElementById("showMoreBtnRev");
    const showLessBtn = document.getElementById("showLessBtnRev");
    if (!feedbackContainer.classList.contains("h-80")) {
      feedbackContainer.classList.add("h-80");
      feedbackContainer.classList.add("overflow-hidden");
    }
    showMoreBtn.classList.toggle("hidden");
    showLessBtn.classList.toggle("hidden");
  };

  const like = (indx) => {
    const likeIcon = document.getElementById(`likeIcon${indx}`);
    const dislikeIcon = document.getElementById(`dislikeIcon${indx}`);
    const likebtn = document.getElementById(`likeBtn${indx}`);
    const dislikebtn = document.getElementById(`dislikeBtn${indx}`);
    if (likeIcon.classList.contains("fill-black")) {
      likeIcon.classList.remove("fill-black");
      likeIcon.classList.add("fill-white");
    }
    if (dislikeIcon.classList.contains("fill-white")) {
      dislikeIcon.classList.remove("fill-white");
      dislikeIcon.classList.add("fill-black");
    }
    if (likebtn.classList.contains("bg-white")) {
      likebtn.classList.remove("bg-white");
      likebtn.classList.add("bg-black");
    }
    if (dislikebtn.classList.contains("bg-black")) {
      dislikebtn.classList.remove("bg-black");
      dislikebtn.classList.add("bg-white");
    }
  };

  const dislike = (indx) => {
    const likeIcon = document.getElementById(`likeIcon${indx}`);
    const dislikeIcon = document.getElementById(`dislikeIcon${indx}`);
    const likebtn = document.getElementById(`likeBtn${indx}`);
    const dislikebtn = document.getElementById(`dislikeBtn${indx}`);
    if (likeIcon.classList.contains("fill-white")) {
      likeIcon.classList.remove("fill-white");
      likeIcon.classList.add("fill-black");
    }
    if (dislikeIcon.classList.contains("fill-black")) {
      dislikeIcon.classList.remove("fill-black");
      dislikeIcon.classList.add("fill-white");
    }
    if (likebtn.classList.contains("bg-black")) {
      likebtn.classList.remove("bg-black");
      likebtn.classList.add("bg-white");
    }
    if (dislikebtn.classList.contains("bg-white")) {
      dislikebtn.classList.remove("bg-white");
      dislikebtn.classList.add("bg-black");
    }
  };

  return (
    <div
      id="studentsFeedbackContainer"
      className="w-11/12 max-w-3xl sm:w-4/5 lg:ml-32 xs:mx-auto"
    >
      <div className="text-3xl font-bold mb-3">Student feedback</div>
      {/* course detailed ratings */}
      <div id="courseRatingFeedback" className="flex gap-4 items-center mb-3">
        <div id="averageRating" className="flex flex-col gap-1 items-center">
          <div className="text-5xl text-yellow font-bold">{averageRating}</div>
          <div className="text-3xl">
            <Rating
              name="read-only"
              value={averageRating}
              precision={0.5}
              readOnly
            />
          </div>
          <div className="text-lg text-yellow font-bold">Course Rating</div>
        </div>
        <div id="ratingDetails" className="flex flex-col justify-between">
          {selectedCourseReview?.ratingDistribution
            ?.slice(0)
            .reverse()
            .map((rate) => {
              return (
                <div
                  key={`rate${rate.rating}`}
                  className="flex gap-3 items-baseline"
                >
                  <div class="w-80 bg-lightGray h-3">
                    <div
                      class="bg-darkGray h-3"
                      style={{
                        width: `${Math.round(
                          (rate.count / totalReviewers) * 100
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-3xl">
                    <Rating
                      name="read-only"
                      value={rate.rating}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div className="underline text-darkViolet font-bold">
                    {Math.round((rate.count / totalReviewers) * 100)}%
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* students reviews */}
      <div id="studentsCommentsContainer">
        <div className="text-3xl font-bold mb-4">Reviews</div>
        <div id="studentsComments" className="h-80 overflow-hidden">
          {selectedCourseReview?.results?.map((review, indx) => {
            return (
              <div key={review.id}>
                {/*profile picture */}
                <div className="mb-2">
                  <img
                    src={review.user?.image_50x50}
                    alt={review.display_name}
                    className="rounded-full"
                  />
                </div>
                {/* review details */}
                <div>
                  <div className="text-lg font-bol mb-2">
                    {review.user?.public_display_name}
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <Rating
                      name="read-only"
                      value={review.rating}
                      precision={0.5}
                      readOnly
                    />
                    <div className="text-darkGray">
                      {review.created_formatted_with_time_since}
                    </div>
                  </div>
                  <div className="mb-2">{review.content}</div>
                  <div className="text-sm mb-2">Was this review helpful?</div>
                  <div className="flex items-center gap-3">
                    <button
                      id={`likeBtn${indx}`}
                      onClick={() => like(indx)}
                      className="bg-white border-2 border-black rounded-full p-2"
                    >
                      <LikeIcon id={`likeIcon${indx}`} />
                    </button>
                    <button
                      id={`dislikeBtn${indx}`}
                      onClick={() => dislike(indx)}
                      className="bg-white border-2 border-black rounded-full p-2"
                    >
                      <DislikeIcon id={`dislikeIcon${indx}`} />
                    </button>
                    <div className="underline">Report</div>
                  </div>
                </div>
                {indx < selectedCourseReview?.results?.length - 1 && (
                  <div className="h-1 bg-lightGray my-4"></div>
                )}
              </div>
            );
          })}
        </div>
        <button
          id="showMoreBtnRev"
          onClick={showMoreReviews}
          className="w-full font-bold hover:bg-thinGray border-2 border-black py-2 mt-4"
        >
          See more reviews
        </button>
        <button
          id="showLessBtnRev"
          onClick={showLessReviews}
          className="hidden w-full font-bold hover:bg-thinGray border-2 border-black py-2 mt-4"
        >
          See less reviews
        </button>
      </div>
    </div>
  );
};

export default StudentsFeedback;
