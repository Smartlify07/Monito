const HeroSection = () => {
  return (
    <section className="bg-cream px-10 pt-10 rounded-2xl overflow-hidden self-center relative lg:w-11/12">
      <div className="flex items-center gap-8 ">
        <div className="relative lg:-bottom-10 lg:w-full xl:-bottom-10 z-50">
          <img
            src="./images/puppiesgroup2.svg"
            className=" object-cover w-full"
            alt=""
          />
        </div>

        <div className="flex gap-2 flex-col py-7 z-50">
          <h1 className="text-white text-right font-bold lg:text-[48px] lg:leading-[3rem] xl:text-[52px] xl:leading-[3rem]">
            One more friend
          </h1>

          <h2 className="text-white text-right font-semibold lg:text-[28px] xl:text-4xl">
            Thousands more fun!
          </h2>

          <p className="text-xs text-gray-50 my-3 text-right">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div className="flex justify-end items-center gap-5 my-2">
            <button className="text-white border-2 border-white rounded-full flex font-medium items-center gap-2 px-5 py-2">
              View Intro <img src="./images/Play_Circle.svg" />
            </button>

            <button className="text-primary font-medium text-base  bg-white rounded-full flex items-center gap-2 px-5 py-2">
              Explore now
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-primary absolute -top-4 -right-20  lg:block lg:w-[700px] h-[450px] transform -rotate-[10deg] rounded-[100px] "></div>
    </section>
  );
};

export default HeroSection;
