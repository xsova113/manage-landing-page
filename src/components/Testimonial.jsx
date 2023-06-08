import { testimonialData } from "../constants/constants";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Testimonial = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [direction, setDirection] = useState("");

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setDirection("right");
    } else if (distance < -minSwipeDistance) {
      setDirection("left");
    }
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe && isSelected < 3 && setIsSelected((prev) => ++prev);
      isRightSwipe && isSelected >= 1 && setIsSelected((prev) => --prev);
    }
  };

  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-[#242D52] mb-12 font-bold md:text-4xl text-3xl">
        What they&apos;ve said
      </h1>
      <div className="flex items-center overflow-x-scroll w-screen max-md:hidden">
        <div className="flex gap-6 mx-auto px-20">
          {testimonialData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:w-[520px] max-md:touch-pan-x text-center"
            >
              <div className="bg-[#FAFAFA] px-8 rounded-md mt-16 flex flex-col items-center relative">
                <img
                  src={item.avatar}
                  className="w-[75px] absolute -top-[15%] md:-top-[20%]"
                />

                <h1 className="text-[#242D52] font-bold mt-10 py-5">
                  {item.name}
                </h1>
                <p className="leading-relaxed text-gray-400 pb-8">
                  {item.quotes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden flex">
        {testimonialData.map((item, index) => (
          <motion.div
            variants={fadeIn(direction, "spring", 0, 0.5)}
            initial="hidden"
            whileInView={"show"}
            key={index}
            className={`flex flex-col min-w-[350px] md:w-[500px] max-md:touch-pan-x text-center ${
              isSelected !== index && "hidden"
            }`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="bg-[#FAFAFA] px-8 rounded-md mt-16 flex flex-col items-center relative">
              <img
                src={item.avatar}
                className="w-[75px] absolute -top-[15%] md:-top-[20%]"
              />

              <h1 className="text-[#242D52] font-bold mt-10 py-5">
                {item.name}
              </h1>
              <p className="leading-relaxed text-gray-400 pb-8">
                {item.quotes}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex md:hidden pt-7 gap-1">
        {testimonialData.map((item, index) => (
          <button
            key={index}
            className={`w-[10px] h-[10px] rounded-full transition border border-[#F25F3A] ${
              index === isSelected && "bg-[#F25F3A]"
            }`}
            onClick={() => setIsSelected(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
