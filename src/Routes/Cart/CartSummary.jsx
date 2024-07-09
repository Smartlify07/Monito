import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectAllPrices } from "../../app/store/cart/cartSlice";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const totalPrice = useSelector(selectAllPrices);

  const handleTotalPrice = useCallback(() => {
    return totalPrice.toLocaleString();
  }, [totalPrice]);
  return (
    <aside className="flex order-1 font-intertight rounded-md flex-col gap-3 py-3 px-3 shadow-sm lg:w-5/12 lg:order-2">
      <h1 className="text-2xl text-primary font-bold">CartSummary</h1>
      <div className="flex flex-col w-full py-5 lg:px-[20px] gap-[10px] ">
        <div className="">
          <div className="flex items-center py-[8px] justify-between border-b border-[#D4D4D8]">
            <h1 className="font-semibold text-[#18181B]">Subtotal</h1>
            <p className="text-[#667479] text-sm font-medium">
              NGN {handleTotalPrice()}
            </p>
          </div>
          <div className="hidden  items-center py-[8px] justify-between border-b border-[#D4D4D8] lg:flex">
            <p className="text-[#667479] text-sm font-medium">
              Delivery fees and tax not included yet.
            </p>
          </div>
        </div>

        <Link
          to={"/checkout"}
          className="hidden bg-[#0C7050] rounded-lg  items-center justify-center py-[14px] font-intertight text-sm font-semibold text-white-2 transition-all hover:bg-primary lg:flex"
        >
          Chekout NGN ({handleTotalPrice()})
        </Link>
      </div>
    </aside>
  );
};

export default CartSummary;
