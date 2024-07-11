const CartMessage = ({ message }) => {
  return (
    <div className="flex items-center justify-center lg:justify-end py-4 px-4">
      <div className="flex mt-4 w-11/12 lg:mt-24 items-center justify-between p-3 bg-primary  rounded-lg shadow-lg lg:w-1/3 self-center text-white">
        <div>{message}</div>
        <button className="ml-4 py-2 px-2 border border-white bg-transparent text-white focus:outline-none">
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default CartMessage;
