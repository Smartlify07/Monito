const ProductsNavigation = () => {
  return (
    <div className="flex items-center gap-3 my-14 justify-center">
      <img src="./images/Arrow_Left.svg" alt="Arrow-left" />
      <div className="w-[34px] h-[34px] font-semibold flex items-center justify-center text-lg  text-center bg-primary rounded-md text-white">
        1
      </div>
      <div className="w-[34px] h-[34px] font-semibold flex items-center justify-center text-lg  text-center text-primary">
        2
      </div>
      <div className="w-[34px] h-[34px] font-semibold flex items-center justify-center text-lg text-center text-primary">
        3
      </div>
      <div className="w-[34px] h-[34px] font-semibold flex items-center justify-center text-lg  text-center text-primary">
        4
      </div>
      <p className="text-primary font-semibold">...</p>
      <div className="w-[34px] h-[34px] font-semibold flex items-center justify-center text-lg  text-center text-primary">
        28
      </div>

      <img src="./images/Arrow_Right.svg" alt="Arrow-left" />
    </div>
  );
};

export default ProductsNavigation;
