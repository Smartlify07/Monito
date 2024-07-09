import { useCallback } from "react";
import { selectAllPrices } from "../../app/store/cart/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutPrice = () => {
  const totalPrice = useSelector(selectAllPrices);

  const handleSubTotal = useCallback(() => {
    return totalPrice;
  }, [totalPrice]);

  const getTax = useCallback(() => {
    return 0.15 * totalPrice;
  }, [totalPrice]);

  const getTotalPrice = useCallback(() => {
    return handleSubTotal() + getTax();
  }, [getTax, handleSubTotal]);
  console.log(getTotalPrice());

  return (
    <section className="flex flex-col py-10 gap-[5px] lg:gap-[5px] lg:mt-9 lg:w-full">
      <div className="flex flex-col gap-0">
        <div className="flex items-center py-2 justify-between">
          <p className=" font-semibold text-[#18181B]">Subtotal:</p>
          <p className="text-sm font-medium text-[#667479]">
            NGN {handleSubTotal().toLocaleString()}
          </p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-b-[#D4D4D8]">
          <p className="font-medium text-[#18181B]">Tax:</p>
          <p className="text-sm font-medium text-[#667479]">
            NGN {getTax().toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between py-2">
        <p className="font-bold text-lg text-[#18181B]">Total:</p>
        <p className="text-sm font-bold text-[#18181b]">
          NGN {getTotalPrice().toLocaleString()}
        </p>
      </div>

      <Link
        to={"/success"}
        className="bg-[#0C7050] flex items-center justify-center rounded-[10px] py-[14px] px-[6px] text-sm text-[#FDFDFD] font-semibold transition-all mt-5 lg:mt-0 hover:bg-primary"
      >
        Pay NGN {getTotalPrice().toLocaleString()}
      </Link>
    </section>
  );
};

export default CheckoutPrice;
