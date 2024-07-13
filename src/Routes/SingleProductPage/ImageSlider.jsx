import { useState } from "react";

/* eslint-disable react/prop-types */
const ImageSlider = ({ productThumbnails }) => {
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  let maxSlide = productThumbnails.length - 1;

  const slideLeft = () => {
    setCurrentImageSlide((prevState) =>
      prevState === 0 ? maxSlide : prevState - 1
    );
  };
  const slideRight = () => {
    setCurrentImageSlide((prevState) =>
      prevState === maxSlide ? 0 : prevState + 1
    );
  };
  return (
    <div className="relative mb-5">
      <span
        onClick={slideLeft}
        className="cursor-pointer bg-[#FAFAFAB2] w-10 h-10 rounded-full absolute flex  items-center justify-center left-5 top-[50%]"
      >
        <img src="/images/icons/LeftCaret.svg" alt="Left caret" />
      </span>
      <img
        src={productThumbnails[currentImageSlide]}
        className="w-full h-[400px] object-center object-cover lg:w-full lg:h-[476px] lg:rounded-lg "
        alt="mainimage"
        loading="lazy"
      />
      <span
        onClick={slideRight}
        className="cursor-pointer bg-[#FAFAFAB2] absolute flex items-center justify-center w-10 h-10 rounded-full right-5 top-[50%]"
      >
        <img src="/images/icons/RightCaret.svg" alt="Right caret" />
      </span>
    </div>
  );
};

export default ImageSlider;
