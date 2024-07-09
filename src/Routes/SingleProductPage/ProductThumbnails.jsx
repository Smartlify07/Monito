/* eslint-disable react/prop-types */
const ProductThumbnails = ({ productThumbnails }) => {
  const renderedThumbnails = productThumbnails.map((thumbnail, index) => (
    <ProductThumbnail key={index} src={thumbnail} />
  ));
  return (
    <section className="flex  mb-5 items-center w-full  gap-3 lg:px-0">
      {renderedThumbnails}
    </section>
  );
};

const ProductThumbnail = ({ src }) => {
  return (
    <img
      src={src}
      className="w-[67.5px] h-[67.5px] object-cover rounded-lg"
      alt="Thumnail"
    />
  );
};

export default ProductThumbnails;
