import { Link } from "react-router-dom";
import CallToAction from "../../app/Components/CallToAction";

/* eslint-disable react/prop-types */
const ProductItem = ({ image, name, gender, price, age, id }) => {
  return (
    <div className="bg-gray-1 flex flex-col gap-1  rounded-lg py-2 px-2 shadow-md">
      <img src={image} className="rounded-sm object-cover w-full" />
      <div className="flex flex-col justify-center gap-1 px-1">
        <h3 className="text-primary font-bold mt-2">{name}</h3>
        <div className="flex flex-col gap-1 lg:gap-2 lg:flex-row lg:items-center">
          <p className="text-[#71717A] font-medium text-xs">
            Gene: <span className="font-bold">{gender}</span>
          </p>
          <p className="text-[#71717A] font-medium text-xs">
            Age: <span className="font-bold"> {age} months old</span>
          </p>
        </div>

        <h4 className="text-primary text-sm font-extrabold lg:text-base lg:text-black-2">
          {" "}
          NGN {price.toLocaleString()}.00
        </h4>
        <CallToAction
          name={name}
          age={age}
          gender={gender}
          price={price}
          image={image}
          id={id}
        />
      </div>
    </div>
  );
};

export default ProductItem;
