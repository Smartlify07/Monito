const Subscribe = () => {
  return (
    <div className="bg-primary rounded-2xl px-4 py-8 lg:p-8 flex flex-col items-center justify-between gap-4 lg:flex-row lg:w-11/12 xl:w-10/12">
      <h1 className="text-white-2 text-[24px] leading-[36px] capitalize font-bold">
        Register now so you don&apos;t miss our programs
      </h1>

      <form className="flex flex-col bg-[#fff] items-center justify-around gap-2 w-full py-3 px-3 rounded-[14px] lg:flex-row lg:py-3 lg:gap-4 lg:w-8/12 xl:w-9/12  lg:bg-white-2">
        <input
          type="email"
          placeholder="Enter your Email"
          className="rounded-lg py-3 w-full px-3 border border-[#99A2A5] lg:w-8/12 xl:w-9/12 focus:outline-none"
        />

        <button className="w-full font-medium bg-primary px-[28px] py-[14px] text-white-2 rounded-md lg:w-auto">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
