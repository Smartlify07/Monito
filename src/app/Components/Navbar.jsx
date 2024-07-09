import { Link } from "react-router-dom";
import CartNav from "./CartNav";

const Navbar = () => {
  return (
    <nav className="hidden fixed top-0 z-[100] w-full  rounded-b-3xl bg-gray-2 items-center justify-center font-intertight py-5 shadow-sm lg:flex">
      <div className="flex w-11/12 items-center lg:gap-5 lg:justify-between xl:gap-0">
        <Link to={"/"}>
          <img src="/images/Logo.svg" alt="Logo" />
        </Link>

        <div className="flex items-center justify-between lg:gap-5 xl:gap-10">
          <ul className="flex items-center gap-6 text-base text-primary font-semibold font-intertight lg:gap-3 xl:gap-8">
            <li>
              <Link>Category</Link>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            <div className="relative ">
              <input
                type="search"
                placeholder="Search something here!"
                className="py-3 px-9 rounded-full text-sm text-gray-10  bg-gray-1 focus:outline-none placeholder:text-sm placeholder:absolute placeholder:left-10 placeholder:top-[13px]"
              />

              <img
                src="/images/icons/search.svg"
                className="absolute top-3 left-2"
              />
            </div>

            <CartNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
