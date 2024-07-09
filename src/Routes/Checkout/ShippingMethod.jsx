const ShippingMethod = () => {
  return (
    <section className="py-2 flex flex-col gap-5 px-4 lg:px-0 lg:w-full">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-primary">Shipping Method</h3>
        <p className="text-sm text-[#667479]">
          Choose from the shipping options available
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="border p-[16px] border-[#A1A1AA] rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-[26px]"
              src="/images/brands/fedex.png"
              alt="fedex"
            />
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-primary text-sm font-semibold ">
                FedEx Delivery
              </h3>
              <p className="text-[#667479] text-[10px]">Delivery: 0 - 2 days</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" className="bg-transparent" />
            <label htmlFor="Free" className="text-sm text-[#667479]">
              Free
            </label>
          </div>
        </div>
        <div className="border p-[16px] border-[#A1A1AA] rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-[26px]"
              src="/images/brands/ups.png"
              alt="fedex"
            />
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-primary text-sm font-semibold ">
                UPS Delivery
              </h3>
              <p className="text-[#667479] text-[10px]">Delivery: 0 - 2 days</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" className="bg-transparent " />
            <label htmlFor="Free" className="text-sm text-[#667479]">
              2000
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingMethod;
