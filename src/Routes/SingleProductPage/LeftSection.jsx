/* eslint-disable react/prop-types */
import ImageSlider from "./ImageSlider";
import ProductPerks from "./ProductPerks";
import ProductThumbnails from "./ProductThumbnails";
import Socials from "./Socials";

const LeftSection = ({ photos }) => {
  console.log(photos);
  const urls = photos.map(
    (photo) => `https://api.timbu.cloud/images/${photo.url}`
  );
  return (
    <div className="w-full overflow-x-hidden  lg:w-6/12">
      <ImageSlider productThumbnails={urls} />
      <ProductThumbnails productThumbnails={urls} />
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
