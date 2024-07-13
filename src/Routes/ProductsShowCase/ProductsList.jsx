import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  productsStatus,
  selectAllProducts,
} from "../../app/store/products/productsSlice";
import ProductItem from "./ProductItem";
import { useEffect } from "react";
const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(productsStatus);
  console.log(status);
  console.log(products);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
    if (status === "loading") {
      return <p> Loading...</p>;
    } else if (status === "successful") {
      console.log(products[0]);
    }
  }, [dispatch, status]);

  return (
    <section className="py-5 px-2 flex flex-col items-center justify-center w-full">
      <div className="grid justify-items-center w-full gap-3 grid-cols-2 lg:gap-5 lg:grid-cols-3">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
