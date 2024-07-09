const SortProduct = () => {
  return (
    <div className="w-full flex flex-col gap-4 px-4 justify-between lg:gap-0 lg:items-center lg:flex-row ">
      <div className="flex items-baseline gap-2 order-2 lg:order-1">
        <h1 className="text-primary font-bold text-2xl lg:text-xl xl:text-2xl">
          Small Dog
        </h1>
        <span className="text-gray-4">52 puppies</span>
      </div>

      <div className="flex items-center justify-between order-1 lg:order-2">
        <select
          name="sort"
          className="bg-transparent text-gray-4 text-lg border border-gray-5 pt-[10px] pr-[14px] pb-[8px] pl-[20px] rounded-full focus:outline-none"
        >
          <option value="">Sort by: Popular</option>
        </select>
        <div className="flex items-center py-[7px] px-[10px] gap-2 lg:hidden">
          <img
            src="./images/icons/filter.svg"
            className="w-auto"
            alt="filtericon"
          />
          <p className="text-primary font-bold">Filter</p>
        </div>
      </div>
    </div>
  );
};

export default SortProduct;
