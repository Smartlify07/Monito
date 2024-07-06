const ColorsFilter = () => {
  const colorsList = [
    {
      colorName: "red",
      bg: "bg-red-1",
    },
    {
      colorName: "apricot",
      bg: "bg-apricot",
    },
    {
      colorName: "black",
      bg: "bg-black-1",
    },
    {
      colorName: "silver",
      bg: "bg-silver",
    },
    {
      colorName: "tan",
      bg: "bg-tan",
    },
  ];
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-primary font-bold text-base">Color</h4>

      <div className="flex flex-col gap-1 pb-3 border-b border-white-2">
        {colorsList.map((color) => {
          const colorName =
            color.colorName.charAt(0).toUpperCase() +
            color.colorName.slice(1).split("").join("");
          return (
            <>
              <div className="flex items-center gap-4 py-3  ">
                <input
                  type="checkbox"
                  className="inline w-5 h-5 border-none checked:bg-primary rounded-sm bg-white"
                />
                <label
                  className="text-base flex items-center gap-2 text-primary"
                  htmlFor={color.colorName}
                >
                  <span
                    className={`${color.bg} w-4 h-4 rounded-full text-base`}
                  ></span>
                  {colorName}
                </label>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ColorsFilter;
