import CheckoutItemsList from "./CheckoutItemsList";

const CheckoutSummary = () => {
  return (
    <aside className="w-full px-4  order-1 lg:order-2  ">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl text-primary font-bold px-4">Order Summary</h1>
        <p className="text-sm font-normal text-[#667479] px-4">
          Review your selected items and select your preferred shipping options
          to enhance your ordering experience.
        </p>
      </header>
      <CheckoutItemsList />
    </aside>
  );
};

export default CheckoutSummary;
