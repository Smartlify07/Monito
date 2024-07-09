import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, selectAllCartItems } from "../../app/store/cart/cartSlice";

const CartItemsList = () => {
  const cartItems = useSelector(selectAllCartItems);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col mt-7 lg:mt-10 w-full gap-6 shadow-md rounded-b-lg p-3 bg-[#EAEAEA] lg:shadow-none">
      <button
        onClick={handleClearCart}
        className="self-end text-sm py-2 px-2 text-primary font-semibold"
      >
        Clear cart
      </button>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CartItemsList;
