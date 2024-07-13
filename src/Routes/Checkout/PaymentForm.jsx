import TextInput from "../../app/Components/TextInput";
import CheckoutPrice from "./CheckoutPrice";
import useTotalPrice from "../../hooks/useTotalPrice";

const PaymentForm = () => {
  const price = useTotalPrice();
  return (
    <div className="bg-white  w-full px-4 rounded-md py-4 lg:bg-transparent lg:px-5 lg:w-full lg:shadow-md">
      <>
        <div className="flex flex-col gap-4">
          <TextInput
            label={"Email Address"}
            type="email"
            name="email"
            placeholder="Enter your email address"
          />

          <div className="flex flex-col gap-0">
            <label htmlFor="Card Details" className="font-medium">
              Card Details
            </label>
            <div className="flex  items-center justify-between lg:gap-3 lg:flex-row">
              <div className="w-4/12 lg:w-7/12">
                <TextInput
                  type="number"
                  name="cardNo"
                  placeholder="Card Number"
                />
              </div>
              <div className="w-3/12 lg:w-2/12">
                <TextInput type="text" name="expiry" placeholder="MM/YY" />
              </div>
              <div className="w-3/12 lg:w-2/12">
                <TextInput type="number" name="cvc" placeholder="CVC" />
              </div>
            </div>
          </div>

          <TextInput
            label={"Card Holder"}
            type="text"
            name="cardHolder"
            placeholder="Enter the name on your card"
          />
          <TextInput
            label={"Billing Address"}
            type="text"
            name="billingAddress"
            placeholder="Enter your billing address"
          />
        </div>
      </>

      <CheckoutPrice>
        <button
          type="submit"
          to={"/success"}
          className="bg-[#0C7050] flex items-center justify-center rounded-[10px] py-[14px] px-[6px] text-sm text-[#FDFDFD] font-semibold transition-all mt-5 lg:mt-0 hover:bg-primary"
        >
          Pay NGN {price.toLocaleString()}
        </button>
      </CheckoutPrice>
    </div>
  );
};

export default PaymentForm;
