/* eslint-disable react/prop-types */
const ReviewPost = ({ userImage, userName, datePosted, postContent }) => {
  return (
    <div className="flex flex-col py-4 gap-3 border-b border-b-white-2 lg:w-7/12">
      <div className="flex items-center gap-5">
        <img
          src={userImage}
          className="w-[43px] h-[43px] rounded-full object-cover"
          alt=""
        />
        <img src="/images/icons/Star.svg" alt="stars" />
      </div>
      <p className="text-[#18181B] lg:w-10/12">{postContent}</p>

      <div className="flex flex-col gap-1">
        <h4 className="text-primary font-semibold">{userName}</h4>
        <p className="text-[#667479]">{datePosted}</p>
      </div>
    </div>
  );
};

export default ReviewPost;
