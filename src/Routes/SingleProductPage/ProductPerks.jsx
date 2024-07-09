const ProductPerks = () => {
  return (
    <div className="bg-[#FAE2AE] rounded-xl py-[10px] px-[12px] flex flex-col items-center justify-between mt-5 lg:mt-0 lg:flex-row lg:mb-5">
      <div className="flex items-center gap-1">
        <img src="/images/SinglePage/Guarantee-icon-1.svg" alt="" />
        <p className="text-primary font-bold text-[13px]">
          100% health guarantee for pets
        </p>
      </div>
      <div className="flex items-center gap-1">
        <img src="/images/SinglePage/Guarantee-icon-2.svg" alt="" />
        <p className="text-primary font-bold text-[13px]">
          100% guarantee of pet identification
        </p>
      </div>
    </div>
  );
};

export default ProductPerks;
