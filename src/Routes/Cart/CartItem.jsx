/* eslint-disable react/prop-types */
import QuantitiyPicker from "./QuantitiyPicker";

const CartItem = ({ checkout, id, name, gender, price, count, image }) => {
  console.log(image);
  console.log(price);
  return (
    <div className="p-5 border font-intertight border-[#A1A1AA] gap-4 rounded-md flex">
      <div className="bg-[#E4E4E7] h-[92px] w-[92px]  p-[6px] rounded-xl lg:w-auto">
        <img
          src={image}
          className="rounded-lg  w-[80px] h-[80px] lg:w-[114px] lg:h-[114px] object-cover"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2 mt-1 w-full">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-primary font-bold text-lg">{name}</h3>
          <p className="text-[#667479] hidden lg:block text-sm">Female</p>
        </div>

        <div className="flex items-center justify-between w-full">
          <h4 className="text-[#18181B] text-lg font-bold">
            NGN {price.toLocaleString()}
          </h4>
          <p className="text-sm hidden lg:block text-[#667479]">
            Qty: <span className="text-[#18181B]">{count}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-[#667479]  lg:hidden text-sm">{gender}</p>
          <p className="text-sm  lg:hidden text-[#667479]">
            Qty: <span className="text-[#18181B] font-medium">{count}</span>
          </p>
        </div>
        {!checkout && <QuantitiyPicker id={id} count={count} />}
      </div>
    </div>
  );
};

export default CartItem;
