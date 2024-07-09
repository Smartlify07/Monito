import { useSelector } from "react-redux";
import { selectAllReviews } from "../../app/store/reviews/reviewsSlice";
import ReviewPost from "./ReviewPost";
import { useState } from "react";

const ReviewPostsList = () => {
  const [reviewsLength, setReviewsLength] = useState(3);
  const reviews = useSelector(selectAllReviews);

  const renderedReviews = reviews
    .slice(0, reviewsLength)
    .map((review) => <ReviewPost key={review.id} {...review} />);

  const loadMoreReviews = () => {
    setReviewsLength((prevState) => prevState + 3);
  };
  return (
    <section className="flex flex-col gap-4">
      {renderedReviews}
      <p
        onClick={loadMoreReviews}
        className="cursor-pointer text-[#667479] text-[11px] flex items-center gap-1 font-bold font-plusjarkatasans"
      >
        <img src="/images/icons/Refresh Icon.svg" /> Load more reviews
      </p>
    </section>
  );
};

export default ReviewPostsList;
