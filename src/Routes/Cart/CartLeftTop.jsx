import { useSelector } from "react-redux";
import { selectAllCartItems } from "../../app/store/cart/cartSlice";

const CartLeftTop = () => {
  const cartItems = useSelector(selectAllCartItems);
  return (
    <div className="w-full flex flex-col gap-4 mt-7 lg:mt-10">
      <h3 className="text-primary font-semibold text-xl">
        My cart{" "}
        <span className="bg-[#667479] ml-3 rounded-full py-3 px-3 font-plusjarkatasans font-bold text-[#fafafa]">
          {cartItems.length}
        </span>
      </h3>

      <p className="text-sm text-[#667479]">
        Review your selected items and proceed to checkout to complete your
        order.
      </p>
    </div>
  );
};

export default CartLeftTop;
