/* eslint-disable react/prop-types */
import ImageSlider from "./ImageSlider";
import ProductPerks from "./ProductPerks";
import ProductThumbnails from "./ProductThumbnails";
import Socials from "./Socials";

const LeftSection = ({ product }) => {
  return (
    <div className="w-full overflow-x-hidden  lg:w-6/12">
      <ImageSlider productThumbnails={product.thumbnails} />
      <ProductThumbnails productThumbnails={product.thumbnails} />
      <div className="hidden lg:block">
        <ProductPerks />
      </div>
      <div className="hidden lg:block">
        <Socials />
      </div>
    </div>
  );
};

export default LeftSection;
