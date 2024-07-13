import { useSelector } from "react-redux";
import CartItemsList from "./CartItemsList";
import CartLeftTop from "./CartLeftTop";
import { selectAllPrices } from "../../app/store/cart/cartSlice";
import { useCallback } from "react";
import { Link } from "react-router-dom";

const CartLeftSection = () => {
  const totalPrice = useSelector(selectAllPrices);
  console.log(totalPrice);

  const total = useCallback(() => {
    return totalPrice.toLocaleString();
  }, [totalPrice]);

  return (
    <section className="order-2  lg:px-0 lg:order-1 lg:w-6/12 ">
      <CartLeftTop />
      <CartItemsList />
      <div className="flex justify-center shadow-md items-center p-5 w-full mt-10 bg-[#EAEAEA] rounded-md lg:hidden">
        <Link
          to={"/checkout"}
          className="  bg-[#0C7050]  rounded-lg w-11/12  flex  items-center justify-center py-[14px] font-intertight text-sm font-semibold text-white-2 transition-all hover:bg-primary "
        >
          Chekout NGN {`(${total()})`}
        </Link>
      </div>{" "}
    </section>
  );
};

export default CartLeftSection;
