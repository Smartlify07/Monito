import PaymentForm from "./PaymentForm";

const PaymentDetails = () => {
  return (
    <div className="flex flex-col w-full gap-5  lg:px-0 lg:w-full">
      <div className="flex flex-col gap-2 px-4 lg:px-0">
        <h3 className="text-2xl font-bold text-primary">Payment Details</h3>
        <p className="text-sm text-[#667479]">
          Please finalize your purchase by entering your card payment
          information.
        </p>
      </div>

      <PaymentForm />
    </div>
  );
};

export default PaymentDetails;
