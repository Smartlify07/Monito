import ProductsShowcase from "../ProductsShowCase/ProductsShowcase";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <section className=" bg-gray-1 font-intertight flex flex-col lg:pt-28 lg:pb-10">
      <HeroSection />
      <ProductsShowcase />
    </section>
  );
};

export default HomePage;
