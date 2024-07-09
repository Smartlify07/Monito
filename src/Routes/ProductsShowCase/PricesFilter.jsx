const PricesFilter = () => {
  return (
    <div className="flex flex-col gap-1 border-b py-5 border-white-2">
      <h4 className="text-primary font-bold text-base">Price</h4>

      <div className="flex items-center gap-3 ">
        <input
          type="number"
          placeholder="Min"
          min={0}
          className="inline bg-transparent py-2  border-b border-b-white-2 w-28 placeholder:text-black-1 focus:outline-1 focus:outline-none"
        />
        <input
          type="number"
          placeholder="Max"
          max={10}
          className="inline rounded-sm bg-transparent py-2 border-b border-b-white-2 w-28 placeholder:text-black-1 focus:outline-1 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default PricesFilter;
