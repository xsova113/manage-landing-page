const Hero = () => {
  return (
    <div className="md:mt-28 mt-10 leading-loose flex flex-col-reverse md:flex-row md:gap-8 lg:gap-14 items-center">
      {/* title and text section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-start flex-1">
        <h1 className="text-[#242D52] text-3xl lg:text-5xl md:text-4xl leading-[40px] lg:leading-[55px] md:leading-[45px] font-bold">
          Bring everyone together to build better products.
        </h1>
        <p className="mt-2 mb-8 md:my-8 text-gray-400 w-[70%] max-md:w-full">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="w-[175px] py-3 bg-[#F25F3A] rounded-full text-white shadow-[#F25F3A]/50 shadow-[_0px_10px_20px] hover:animate-pulse">
          Get Started
        </button>
      </div>

      {/* image and graph section */}
      <div className="flex flex-1">
        <img src="images/illustration-intro.svg" />
      </div>
    </div>
  );
};

export default Hero;
