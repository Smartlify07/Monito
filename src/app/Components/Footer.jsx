import FooterNav from "./FooterNav";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer className="bg-cream font-intertight rounded-t-[20px] px-4 py-14 flex flex-col gap-10 items-center lg:px-0 lg:rounded-t[40px]">
      <div className="flex flex-col gap-10 items-center w-full">
        <Subscribe />
        <FooterNav />
        <div className="w-full  bg-[#CCD1D2] h-[1px] lg:w-11/12 xl:w-10/12"></div>
      </div>

      <div className="flex items-center flex-col gap-8 lg:justify-start lg:gap-56  lg:w-10/12 lg:flex-row">
        <img className="lg:order-2" src="/images/Logo.svg" alt="Logo" />
        <p className="text-sm text-[#667479]">
          © 2024 Peppa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
