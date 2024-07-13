import { useSelector } from "react-redux";
import { selectAllPrices } from "../app/store/cart/cartSlice";
import { useCallback } from "react";

const useTotalPrice = () => {
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
  return getTotalPrice();
};

export default useTotalPrice;
