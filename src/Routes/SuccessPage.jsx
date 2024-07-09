import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <section className=" min-h-screen flex items-center justify-center ">
      <div className="py-[16px] w-11/12 lg:w-4/12 bg-[#E7E7E7] px-[30px] font-intertight rounded-[20px] flex flex-col">
        <div className="self-end">
          <img src="/images/icons/cancel.png" alt="cancel" />
        </div>

        <div className="self-center">
          <img src="/images/success.png" alt="" />
        </div>

        <h1 className="text-[#12A150] font-bold text-2xl my-3 self-center">
          Success
        </h1>

        <div className="flex flex-col gap-4 py-5 self-center">
          <p className="text-[#667479] text-sm text-center">
            Thank you for your order on Peppa! Your furry friend is eagerly
            waiting for you at home. 🐾
          </p>

          <p className="text-[#667479] text-center">
            Order NO: <span className="font-semibold">2347654BD</span>
          </p>
        </div>

        <Link to={"/"} className="text-primary self-center text-sm">
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
