import { Link } from "react-router-dom";

const CartNav = () => {
  return (
    <Link
      to={"/cart"}
      className="flex justify-center items-center gap-1 cursor-pointer "
    >
      <img src="/images/icons/shopping-cart.svg" alt="shopping cart" />
      <div className="flex items-center">
        <span className="text-gray-10 hidden font-normal lg:block">Cart</span>
        <img src="./images/icons/Caret_Down.svg" className="" alt="" />
      </div>
    </Link>
  );
};

export default CartNav;
