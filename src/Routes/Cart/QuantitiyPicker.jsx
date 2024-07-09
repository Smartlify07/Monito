/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeItem,
} from "../../app/store/cart/cartSlice";

const QuantitiyPicker = ({ count, id }) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increaseCount({ id }));
  };
  const handleDecrement = () => {
    dispatch(decreaseCount({ id }));
  };

  const handleDelete = () => {
    dispatch(removeItem({ id }));
  };
  return (
    <div className="self-end flex items-center justify-end gap-4 mt-[2px] w-full cursor-pointer">
      <button className=" py-2 " onClick={handleDelete}>
        <img src="/images/icons/delete.svg" alt="delete icon" />
      </button>
      <div className="border  w-10/12 py-[10px] px-[6px] flex justify-around items-center gap-4 border-[#D4D4D8] rounded-md lg:justify-between lg:w-4/12">
        <button onClick={handleDecrement} className=" border">
          <img src="/images/icons/Minus.svg" alt="Minus" />
        </button>
        <span className="text-[#18181b] text-sm font-semibold">{count}</span>
        <button className="py-2" onClick={handleIncrement}>
          <img src="/images/icons/Plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default QuantitiyPicker;
