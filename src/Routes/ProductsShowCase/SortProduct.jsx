const SortProduct = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-baseline gap-2">
        <h1 className="text-primary font-bold text-2xl">Small Dog</h1>
        <span className="text-gray-4">52 puppies</span>
      </div>

      <select
        name="sort"
        className="bg-transparent text-gray-4 text-lg border border-gray-5 px-3 py-1 rounded-full"
      >
        <option value="">Popular</option>
      </select>
    </div>
  );
};

export default SortProduct;
