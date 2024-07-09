import { useSelector } from "react-redux";
import Breadcrumbs from "../../app/Components/Breadcrumbs";
import CartLeftSection from "./CartLeftSection";
import CartSummary from "./CartSummary";
import { selectAllProducts } from "../../app/store/products/productsSlice";
import ProductItem from "../ProductsShowCase/ProductItem";
import React from "react";

const CartPage = () => {
  const products = useSelector(selectAllProducts);

  return (
    <section className="pt-0 pb-8 px-4 font-intertight flex flex-col items-center lg:pt-20 lg:py-10 lg:pb-10">
      <div className="w-full lg:pt-10 lg:w-11/12">
        <Breadcrumbs />
        <div className="flex flex-col lg:items-baseline lg:flex-row lg:justify-between">
          <CartLeftSection />
          <CartSummary />
        </div>

        <div className="flex flex-col mt-10 gap-6 lg:mt-24">
          <div className="flex flex-col gap-1">
            <p className="text-[#000]">
              Discover what other customers enjoy, which{" "}
            </p>
            <h3 className="text-primary font-bold text-2xl">
              You may also like
            </h3>
          </div>

          <div className="grid  grid-cols-2 gap-3  lg:grid-cols-4">
            {products.slice(1, 5).map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const memoCartPage = React.memo(CartPage);

export default memoCartPage;
