import { useSelector } from "react-redux";
import CartItem from "../Cart/CartItem";
import {
  selectAllCartItems,
  selectAllPrices,
} from "../../app/store/cart/cartSlice";
import { useCallback } from "react";

const CheckoutItemsList = () => {
  const checkoutItems = useSelector(selectAllCartItems);
  const totalPrice = useSelector(selectAllPrices);
  console.log(totalPrice);
  const renderedCheckoutList = checkoutItems.map((item) => (
    <CartItem key={item.id} {...item} />
  ));

  const handleTotalPrice = useCallback(() => {
    return totalPrice.toLocaleString();
  }, [totalPrice]);
  return (
    <div className="flex flex-col gap-5 rounded-lg shadow-md p-5 lg:mt-5">
      {renderedCheckoutList}
      <div className="hidden lg:flex items-center justify-between">
        <h3 className="text-[#18181B] font-semibold">Subtotal:</h3>
        <p className="text-[#667479] text-sm">NGN {handleTotalPrice()}</p>
      </div>
    </div>
  );
};

export default CheckoutItemsList;
