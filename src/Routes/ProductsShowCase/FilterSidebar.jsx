import BreedsFilter from "./BreedsFilter";
import ColorsFilter from "./ColorsFilter";
import GenderFilter from "./GenderFilter";
import PricesFilter from "./PricesFilter";

const FilterSidebar = () => {
  return (
    <aside className="hidden flex-col gap-5 lg:flex  lg:w-1/4">
      <h3 className="text-primary text-lg font-bold lg:text-xl xl:text-2xl">
        Filter
      </h3>
      <div className="flex gap-5 flex-col mt-3">
        <GenderFilter />
        <ColorsFilter />
        <PricesFilter />
        <BreedsFilter />
      </div>
    </aside>
  );
};

export default FilterSidebar;
