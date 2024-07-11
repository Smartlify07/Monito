import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllCartItems } from "../store/cart/cartSlice";

const CartNav = () => {
  const cartItems = useSelector(selectAllCartItems);

  return (
    <Link
      to={"/cart"}
      className="flex justify-center items-center gap-1 cursor-pointer "
    >
      <img src="/images/icons/shopping-cart.svg" alt="shopping cart" />
      <div className="flex items-center relative">
        {cartItems.length > 0 && (
          <span className="w-2 h-2 bg-primary rounded-full absolute top-0 -left-6"></span>
        )}
        <span className="text-gray-10 hidden font-normal lg:block">Cart</span>
        <img src="./images/icons/Caret_Down.svg" className="" alt="" />
      </div>
    </Link>
  );
};

export default CartNav;
