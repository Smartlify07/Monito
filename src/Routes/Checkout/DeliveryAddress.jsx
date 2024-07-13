import TextInput from "../../app/Components/TextInput";

const DeliveryAddress = () => {
  return (
    <div className="flex px-4 flex-col gap-5 w-full lg:px-0 lg:w-full">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-primary">Delivery Address</h3>
        <p className="text-sm text-[#667479]">
          Enter your residential address below
        </p>
      </div>

      <div className="lg:shadow-md rounded-md py-4 lg:px-5 ">
        <div action="" className="flex flex-col w-full gap-3">
          <TextInput
            label={"Home Address"}
            type="text"
            name="home"
            placeholder="Enter your residential address"
          />
          <TextInput
            label={"Phone Number"}
            type="number"
            name="phone"
            placeholder="Enter your phone number i.e +2349087654321"
          />

          <div className="flex items-baseline gap-4 lg:justify-between lg:flex-row">
            <div className="w-4/12 lg:w-4/12">
              <TextInput
                label={"State"}
                name="state"
                type="text"
                placeholder="Lagos"
              />
            </div>
            <div className="w-4/12 lg:w-4/12">
              <TextInput
                label={"Country"}
                type="text"
                placeholder="Nigeria"
                name="country"
              />
            </div>
            <div className="w-3/12 lg:w-3/12">
              <TextInput
                label={"ZIP Code"}
                type="number"
                placeholder="000000"
                name="zip"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TextInput type="checkbox" />
            <label className="text-[#667479] text-sm ">
              Set as billing address
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
