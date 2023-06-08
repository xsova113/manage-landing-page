import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { footerArray } from "../constants/constants";
import SearchBar from "../components/SearchBar";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row bg-neutral-800 px-20 py-16 text-white md:-mx-32 md:px-28 -mx-20 md:justify-between items-center">
      <div className="block md:hidden mb-16">
        <SearchBar />
      </div>

      <div className="flex flex-col-reverse md:flex-row max-md:items-centergap-10 md:gap-20">
        <div className="flex flex-col-reverse md:flex-col justify-between items-center max-md:gap-12">
          <img src="/images/logo2.svg" className="max-md:w-[150px]" />

          {/* socials icons */}
          <div className="flex md:gap-2 gap-8 mt-10">
            <AiFillFacebook
              size={40}
              className="hover:fill-[#F25F3A] md:w-6 transition cursor-pointer"
            />
            <AiFillYoutube
              size={40}
              className="hover:fill-[#F25F3A] md:w-6 transition cursor-pointer"
            />
            <AiOutlineTwitter
              size={40}
              className="hover:fill-[#F25F3A] md:w-6 transition cursor-pointer"
            />
            <AiFillLinkedin
              size={40}
              className="hover:fill-[#F25F3A] md:w-6 transition cursor-pointer"
            />
            <AiOutlineInstagram
              size={40}
              className="hover:fill-[#F25F3A] md:w-6 transition cursor-pointer"
            />
          </div>
        </div>

        {/* footers arrays */}
        <div className="flex lg:gap-40 md:gap-16 gap-24 max-md:text-sm md:ml-0 lg:ml-16 transition-all justify-center">
          <div className="flex flex-col gap-5">
            {footerArray.slice(0, 4).map((item) => (
              <span
                key={item}
                className="hover:text-[#F25F3A] cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-5 ">
            {footerArray.slice(4, 7).map((item) => (
              <span
                key={item}
                className="hover:text-[#F25F3A] cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:justify-between items-end h-full">
        <div className="hidden md:block">
          <SearchBar />
        </div>
        <span className="text-gray-200/60 text-sm pt-10">
          Copyright {currentYear}. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
