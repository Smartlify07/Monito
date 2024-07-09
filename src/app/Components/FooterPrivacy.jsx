const FooterPrivacy = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-between lg:flex-row lg:w-11/12 xl:w-10/12">
      <h3 className="text-[#667479] text-[12px] order-3 lg:order-1 lg:text-base lg:text-[#71717A]">
        &copy; 2024 Monito. All rights reserved.
      </h3>

      <img className="w-auto lg:order-2" src="/images/Logo2.svg" alt="Logo" />

      <div className="flex flex-col gap-2 items-center lg:gap-7 lg:order-3  lg:flex-row">
        <p className="text-[#667479] font-medium">Terms of Service</p>
        <p className="text-[#667479] font-medium">Privacy Policy</p>
      </div>
    </div>
  );
};

export default FooterPrivacy;
