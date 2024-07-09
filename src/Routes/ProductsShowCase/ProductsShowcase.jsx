import FilterSidebar from "./FilterSidebar";
import ProductsList from "./ProductsList";
import SortProduct from "./SortProduct";

const ProductsShowcase = () => {
  return (
    <section className="flex self-center py-16 gap-10 lg:w-11/12">
      <FilterSidebar />

      <div className="flex flex-col w-full gap-4">
        <SortProduct />
        <ProductsList />
      </div>
    </section>
  );
};

export default ProductsShowcase;
