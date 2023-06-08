import { useEffect, useState } from "react";
import { navbarArray } from "../constants/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => setInView(true));
    return () => window.removeEventListener("load", () => setInView(false));
  }, [window.innerWidth]);
  return (
    <>
      <nav
        className={`bg-gradient-to-b from-black/10 to-black/50 inset-0 absolute transition duration-500 delay-100 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`flex justify-center items-center md:justify-between relative transition duration-700 delay-100 ${
          inView ? "md:translate-y-0" : "md:-translate-y-[200px]"
        }`}
      >
        <div className="flex justify-between max-md:w-full">
          <div>
            <Link to={"/"}>
              <img src="/images/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="md:hidden">
            <img
              src="/images/icon-hamburger.svg"
              alt="icon-hamburger"
              hidden={isOpen}
              onClick={() => setIsOpen(true)}
            />
            <img
              src="/images/icon-close.svg"
              alt="icon-close"
              hidden={!isOpen}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        {/* laptop screen navbar */}
        <div className="max-md:hidden flex gap-3 lg:gap-8 transition-all justify-center">
          {navbarArray.map((item) => (
            <Link
              to={item.link}
              key={item.title}
              className="cursor-pointer text-[#242D52] font-medium text-sm hover:text-[#242D52]/60 transition"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* small screen navbar */}
        <div
          className={`${
            isOpen
              ? "max-md:translate-y-0"
              : "max-md:-translate-y-[500px] max-md:opacity-0"
          } md:hidden flex flex-col gap-5 absolute top-[70px] text-center bg-white rounded-md py-8 shadow-lg w-full transition duration-500`}
        >
          {navbarArray.map((item) => (
            <Link
              to={item.link}
              key={item.title}
              className="cursor-pointer text-[#242D52] font-medium hover:text-[#242D52]/60 transition"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <button className="hidden md:block px-8 py-3 bg-[#F25F3A] rounded-full text-white shadow-[#F25F3A]/50 shadow-[_0px_10px_20px] hover:animate-pulse">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Navbar;
