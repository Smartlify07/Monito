const BreedsFilter = () => {
  return (
    <div className="flex flex-col gap-1 pb-3 border-b border-white-2">
      <h4 className="text-primary font-bold text-base">Gender</h4>

      <div className="flex flex-col gap-3 mt-1">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="inline w-5 h-5 border-none checked:bg-primary rounded-sm bg-white"
          />
          <label className="text-base text-primary" htmlFor="Male">
            Small
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="inline w-5 h-5 rounded-sm bg-white"
          />
          <label className="text-base text-primary" htmlFor="Male">
            Medium
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="inline w-5 h-5 rounded-sm bg-white"
          />
          <label className="text-base text-primary" htmlFor="Male">
            Large
          </label>
        </div>
      </div>
    </div>
  );
};

export default BreedsFilter;
