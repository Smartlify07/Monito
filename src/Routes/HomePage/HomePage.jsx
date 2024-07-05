import ProductsShowcase from "../ProductsShowCase/ProductsShowcase";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <section className="py-10 bg-gray-1 font-intertight flex flex-col">
      <HeroSection />
      <ProductsShowcase />
    </section>
  );
};

export default HomePage;
