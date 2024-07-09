import { Link } from "react-router-dom";
import CartNav from "./CartNav";

const NavbarMobile = () => {
  return (
    <nav className="block  lg:hidden py-6 ">
      <div className="flex items-center px-5 justify-between">
        <div className="flex flex-col gap-1">
          <span className="w-5 h-[2px] bg-primary"></span>
          <span className="w-5 h-[2px] bg-primary"></span>
          <span className="w-5 h-[2px] bg-primary"></span>
        </div>

        <Link to={"/"}>
          <img src="/images/Logo.svg" className="w-auto" alt="" />
        </Link>
        <CartNav />
      </div>
    </nav>
  );
};

export default NavbarMobile;
