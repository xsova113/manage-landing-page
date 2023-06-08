import { differenceArray } from "../constants/constants";

const Difference = () => {
  return (
    <>
      <div className="flex flex-col max-md:leading-loose leading-relaxed gap-2 relative md:gap-8 lg:gap-14 md:flex-row md:mt-36 mt-20">
        <img
          src="/images/bg-tablet-pattern.svg"
          className="absolute md:top-[250px] md:-left-[430px] transition -top-[390px] sm:-top-[600px] -right-[70%] md:w-[60%] -z-10"
        />
        {/* title and text */}
        <div className="flex flex-1 flex-col text-center justify-center md:text-start md:justify-start">
          <h1 className="text-[#242D52] font-bold md:text-4xl text-3xl">
            What&apos;s different about Manage?
          </h1>
          <p className="mt-4 md:mt-8 text-gray-400 w-[70%] max-md:w-full">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* features and lists */}
        <div className="flex flex-col relative flex-1 gap-10 max-md:mt-12 max-md:-mx-5">
          {differenceArray.map((item) => (
            <div key={item.tag}>
              <div className="flex gap-4 items-center">
                <span className="py-1 flex w-[65px] justify-center rounded-full text-white bg-[#F25F3A]">
                  {item.tag}
                </span>
                <h1 className="text-[#242D52] font-semibold max-md:bg-[#FFEFEB] max-md:absolute max-md:py-1 max-md:w-full max-md:pl-10 left-[50px] max-md:-z-10">
                  {item.title}
                </h1>
              </div>
              <p className="text-gray-400 pt-4 md:ml-[76px]">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Difference;
