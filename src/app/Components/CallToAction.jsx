/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";
import { Link } from "react-router-dom";

const CallToAction = ({ image, name, price, gender, age, id }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(image, name, price, gender, age, id));
  };
  return (
    <div className="flex flex-col  items-center gap-2 my-2 lg:flex-row">
      <button
        onClick={() => {
          handleAddToCart();
        }}
        className="bg-gray-6 text-sm w-11/12 flex items-center justify-center gap-2 text-primary font-medium transition-all rounded-xl py-2 px-5 lg:w-11/12 xl:justify-normal xl:gap-2 xl:w-auto hover:bg-[#C9C9CD]"
      >
        <img
          className="w-[20px] lg:w-auto"
          src="/images/icons/shopping-cart.svg"
        />
        <span className={`hidden lg:block`}>Add to cart</span>
      </button>
      <Link
        to={`/products/${id}`}
        className="bg-[#0C7050] w-11/12 text-center transition-all text-sm  text-white font-medium  rounded-xl py-2 px-6 hover:bg-primary lg:w-11/12 xl:justify-normal xl:gap-1 xl:w-auto"
      >
        Buy now
      </Link>
    </div>
  );
};

export default CallToAction;
