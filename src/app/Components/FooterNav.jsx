const FooterNav = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-between lg:gap-[562px] lg:justify-start lg:flex-row lg:w-11/12 xl:w-10/12">
      <h1 className="text-primary font-medium">Shop pets</h1>
      <div className="flex items-center gap-7">
        <img src="/images/brands/Twitter.svg" alt="" />
        <img src="/images/brands/Facebook.svg" alt="" />
        <img src="/images/brands/YouTube.svg" alt="" />
        <img src="/images/brands/Instagram.svg" alt="" />
      </div>
    </div>
  );
};

export default FooterNav;
