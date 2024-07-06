import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="rounded-b-3xl bg-gray-2 flex items-center justify-center font-intertight py-5">
      <div className="flex w-11/12 items-center lg:gap-5 lg:justify-between xl:gap-0 xl:justify-around">
        <div className="flex flex-col items-center">
          <img src="./images/Logo.svg" alt="Monito Logo" className="w-auto " />
          <p className="text-primary mt-1 text-xs font-semibold">
            Pets for Best
          </p>
        </div>

        <div className="flex items-center justify-between lg:gap-5 xl:gap-10">
          <ul className="flex items-center gap-6 text-base text-primary font-semibold font-intertight lg:gap-3 xl:gap-8">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link>Category</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>

          <div className="relative">
            <input
              type="search"
              placeholder="Search something here!"
              className="py-3 px-9 rounded-full text-sm text-gray-1  bg-gray-1 focus:outline-none placeholder:text-sm placeholder:absolute placeholder:left-10 placeholder:top-[13px]"
            />

            <img src="./images/search.svg" className="absolute top-3 left-2" />
          </div>

          <Link
            to={"/"}
            className="bg-primary rounded-full py-2 px-6 text-white font-medium lg:text-sm xl:text-base "
          >
            Join the community
          </Link>

          <div className="flex items-center gap-2">
            <img src="./images/shopping-cart.svg" alt="shopping cart" />
            <div className="flex items-center">
              <span className="text-gray-10 font-normal">Cart</span>
              <img src="./images/Caret_Down.svg" className="w-9" alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
