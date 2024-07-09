import { NavLink } from "react-router-dom";

const ReviewsTop = () => {
  return (
    <div className="mb-6">
      <header>
        <h1 className="text-[24px] mb-5 font-bold text-primary">
          Hear What Our Valued Customers Have to Say
        </h1>
      </header>
      <ul className="flex items-center w-full justify-between   border-b py-2 border-gray-200  lg:gap-20 lg:w-5/12">
        <NavLink className="text-[#667479] font-semibold">Description</NavLink>
        <NavLink className="text-[#667479] font-semibold flex items-center gap-1">
          Reviews{" "}
          <span
            className="rounded-md bg-[#667479] font-bold
           font-plusjarkatasans text-[11px] text-white py-1 px-3 "
          >
            157
          </span>{" "}
        </NavLink>
        <NavLink className="text-[#667479] font-semibold">Support</NavLink>
      </ul>
    </div>
  );
};

export default ReviewsTop;
