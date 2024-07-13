/* eslint-disable react/prop-types */
import CallToAction from "../../app/Components/CallToAction";
import ProductInfoTable from "./ProductInfoTable";

const ProductDetails = ({ product, productInfo, id }) => {
  console.log(product);
  const price = product.current_price[0].NGN[0].toLocaleString();
  // console.log(product.current_price[0]);
  return (
    <section className=" lg:px-0 lg:mt-5">
      <p className="text-sm text-[#99A2A5] font-medium">#600123ef</p>
      <h1 className="text-primary font-bold text-[24px]">{product.name}</h1>
      <p className="text-[#667479] font-bold text-[20px]">NGN {price}</p>

      <CallToAction {...product} id={id} />
      <div className="flex mt-5 items-center justify-between lg:hidden">
        <h1 className="text-primary font-semibold text-[18px]">Information</h1>

        <p className="text-primary font-semibold flex items-center gap-1">
          <img src="/images/icons/Share Icon.svg" alt="share icon" />
          Share
        </p>
      </div>

      <ProductInfoTable productInfo={productInfo} />
    </section>
  );
};

export default ProductDetails;
