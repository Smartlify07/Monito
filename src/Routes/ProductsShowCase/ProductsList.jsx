import { useSelector } from "react-redux";
import { selectAllProducts } from "../../app/store/products/productsSlice";
import ProductItem from "./ProductItem";
const ProductsList = () => {
  const products = useSelector(selectAllProducts);
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
