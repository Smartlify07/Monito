import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = () => {
  return (
    <section className="bg-primary w-full   pt-10 rounded-t-2xl  overflow-hidden self-center relative lg:w-11/12 lg:rounded-2xl lg:bg-cream lg:px-10">
      <div className="flex flex-col items-center gap-5 lg:gap-8 lg:flex-row">
        <div className="relative w-full lg:-bottom-10 order-2 lg:order-1 lg:w-full xl:-bottom-10 z-50">
          <LazyLoadImage
            src={"/images/puppiesgroup2.svg"}
            className=" object-cover hidden w-full lg:block"
            PlaceholderSrc={"/images/heroimagecopy.png"}
            alt="Image Alt"
          />
          <img
            src="./images/heromobile.png"
            className="object-cover w-full lg:hidden"
            alt=""
          />
        </div>

        <div className="flex gap-2 flex-col px-4 py-7 order-1 lg:px-0 lg:order-2 z-50">
          <h1 className="text-white text-left w-full font-bold leading-[2.9rem] text-[42px] lg:text-right  lg:text-white lg:text-[48px] lg:leading-[3rem] xl:text-[52px] xl:leading-[3rem]">
            One more friend
          </h1>

          <h2 className="text-white font-bold text-[26px] text-start lg:font-semibold lg:text-right lg:text-white lg:text-[28px] xl:text-4xl">
            Thousands more fun!
          </h2>

          <p className="text-xs text-gray-50 my-3 lg:text-right">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div className="flex justify-center items-center gap-5 my-2 lg:justify-end">
            <button className=" border-2 text-white w-[159px]  border-white rounded-full flex font-medium items-center justify-center gap-2 px-[28px] py-[14px] lg:border-white lg:text-white lg:w-auto">
              View Intro{" "}
              <img
                src="./images/icons/Play_Circle.svg"
                className="hidden lg:inline"
              />
              <img
                src="./images/icons/PlaySecondary.svg"
                className="inline lg:hidden"
              />
            </button>

            <button className=" font-medium text-primary w-[159px] bg-white text-base rounded-full flex items-center justify-center gap-2 px-[28px] py-[14px] lg:w-auto">
              Shop pets
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-cream absolute rounded-tl-[40px]  w-[700px] h-[300px] transform rotate-[10deg] -right-10 -bottom-24   lg:transform lg:-rotate-[10deg] lg:rounded-t-[100px] lg:block  lg:-top-4 lg:-bottom-20 lg:w-[700px] lg:h-[450px] lg:bg-primary lg:-right-20"></div>
    </section>
  );
};

export default HeroSection;
