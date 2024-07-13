import CallToAction from "../../app/Components/CallToAction";
import { LazyLoadImage } from "react-lazy-load-image-component";

/* eslint-disable react/prop-types */
const ProductItem = ({
  photos,
  name,
  gender,
  current_price: price,
  age,
  id,
}) => {
  // console.log(photos[0]);
  let image = photos[0]
    ? `https://api.timbu.cloud/images/${photos[0].url}`
    : "";

  return (
    <div className="bg-gray-1 flex flex-col  gap-1 w-full rounded-lg lg:w-auto py-2 px-2 shadow-md ">
      <LazyLoadImage
        placeholder={
          <div className="bg-white md:w-[264px] md:h-[264px] rounded-sm"></div>
        }
        className="rounded-lg w-full h-[250px] md:w-full md:h-[264px] object-center object-cover"
        src={image ? image : ""}
      />
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
          NGN {price[0].NGN[0].toLocaleString()}.00
        </h4>
        <CallToAction
          name={name}
          age={age}
          gender={gender}
          price={price[0].NGN[0]}
          image={image}
          id={id}
        />
      </div>
    </div>
  );
};

export default ProductItem;
