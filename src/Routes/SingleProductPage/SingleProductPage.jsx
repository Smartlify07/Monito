import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProducts,
  productsStatus,
  selectAllProducts,
  selectProductsById,
} from "../../app/store/products/productsSlice";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Reviews from "./Reviews";
import ProductItem from "../ProductsShowCase/ProductItem";

const SingleProductPage = () => {
  const { id } = useParams();
  const products = useSelector(selectAllProducts);
  const status = useSelector(productsStatus);

  const product = useSelector((state) => selectProductsById(state, id));
  console.log(product);
  console.log(id);
  console.log(status);

  return (
    <section className="font-intertight self-center  flex flex-col  pt-5 pb-5   lg:pt-28  lg:w-11/12 ">
      {status === "successful" ? (
        <>
          <div className="w-full flex flex-col lg:border-[1.5px] rounded-2xl border-[#D4D4D8] pt-5 pb-5 px-3 lg:shadow-sm lg:gap-8 lg:flex-row">
            <LeftSection {...product} id={id} />
            <RightSection product={product} id={id} />
            <div className="bg-[#FAE2AE]  rounded-[10px] flex flex-col gap-3 lg:hidden"></div>
          </div>

          {/* <Reviews /> */}
          <div className="grid px-3 grid-cols-2 gap-3 mt-7 lg:grid-cols-4">
            {products.slice(Number(id), 5).map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </section>
  );
};

export default SingleProductPage;
