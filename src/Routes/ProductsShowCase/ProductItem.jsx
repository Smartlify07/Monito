/* eslint-disable react/prop-types */
const ProductItem = ({ image, name, gender, price, age }) => {
  return (
    <div className="bg-gray-1 flex flex-col gap-1  rounded-lg py-2 px-2 shadow-sm">
      <img src={image} className="rounded-sm object-cover w-full" />
      <div className="flex flex-col justify-center gap-1 px-1">
        <h3 className="text-black-2 font-bold mt-2">{name}</h3>
        <div className="flex items-center gap-2">
          <p className="text-[#71717A] font-medium text-xs">
            Gene: <span className="font-bold">{gender}</span>
          </p>
          <p className="text-[#71717A] font-medium text-xs">
            Age: <span className="font-bold"> {age} months old</span>
          </p>
        </div>

        <h4 className="text-black-2 font-extrabold"> NGN {price}.00</h4>
        <div className="flex items-center gap-2 my-2">
          <button className="bg-gray-6 text-sm flex items-center gap-1 text-primary font-medium rounded-xl py-2 px-5">
            <img className="w-5" src="./images/shopping-cart.svg" />
            Add to cart
          </button>
          <button className="bg-primary text-sm text-white font-medium rounded-xl py-2 px-7">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
