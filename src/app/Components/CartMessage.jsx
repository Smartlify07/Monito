const CartMessage = ({ message }) => {
  return (
    <div className="w-[250px] rounded-sm top-[80px] py-2 px-3 bg-white right-10 absolute">
      <p className="text-primary font-semibold">Successfully added to cart</p>
    </div>
  );
};

export default CartMessage;
