import { useSelector } from "react-redux";
import { selectAllProducts } from "../../app/store/products/productsSlice";
import ProductItem from "./ProductItem";
import ProductsNavigation from "../../app/Components/ProductsNavigation";
const ProductsList = () => {
  const products = useSelector(selectAllProducts);
  console.log(products);
  return (
    <section className="py-5 flex flex-col items-center justify-center w-full">
      <div className="grid w-full grid-cols-3 gap-5 ">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
      <ProductsNavigation />
    </section>
  );
};

export default ProductsList;
