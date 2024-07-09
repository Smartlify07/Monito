/* eslint-disable react/prop-types */
import Breadcrumbs from "../../app/Components/Breadcrumbs";
import ProductDetails from "./ProductDetails";
import ProductPerks from "./ProductPerks";

const RightSection = ({ product }) => {
  return (
    <section className="w-full lg:w-6/12">
      <Breadcrumbs />
      <ProductDetails productInfo={product.info} />
      <div className="block lg:hidden">
        <ProductPerks />
      </div>
    </section>
  );
};

export default RightSection;
