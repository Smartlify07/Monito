import ReviewsTop from "./ReviewsTop";
import ReviewPostsList from "./ReviewPostsList";

const Reviews = () => {
  return (
    <section className="mt-4  py-5 shadow-md w-[95%] rounded-lg px-4 self-center lg:shadow-lg lg:w-full  lg:mt-6 lg:px-5 lg:py-10 ">
      <ReviewsTop />
      <ReviewPostsList />
    </section>
  );
};

export default Reviews;
