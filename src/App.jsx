import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Difference from "./components/Difference";
import Testimonial from "./components/Testimonial";
import SimplifySection from "./components/SimplifySection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col pt-12 px-10 md:px-28 relative overflow-x-hidden">
        <img
          src="/images/bg-tablet-pattern.svg"
          alt="bg-image-desktop"
          className="absolute -top-10 md:-top-20 md:-right-[140px] -right-10 -z-10 w-[90%] md:w-[55%]"
        />

        <Navbar />
        <Hero />
        <Difference />
        <Testimonial />

        <div className="w-full text-center mt-12 md:mb-40 mb-8">
          <button className="w-[175px] py-3 bg-[#F25F3A] rounded-full text-white shadow-[#F25F3A]/50 shadow-[_0px_10px_20px] hover:animate-pulse">
            Get Started
          </button>
        </div>
        <SimplifySection />
        <Footer />
      </div>

      <Routes>
        <Route path="/pricing" />
        <Route path="/products" />
        <Route path="/about" />
        <Route path="/careers" />
        <Route path="/community" />
      </Routes>
    </>
  );
}

export default App;
