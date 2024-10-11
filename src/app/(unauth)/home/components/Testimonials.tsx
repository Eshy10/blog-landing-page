import React, { useState, useEffect } from "react";
import { HOME_TESTIMONIALS } from "@/libs/data";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Detect mobile screens (less than 768px)
    };

    // Initialize value on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSwipe = (direction: "next" | "prev") => {
    const cardsPerScroll = isMobile ? 1 : 3; // 1 card for mobile, 3 cards for larger screens
    const totalSlides = Math.ceil(HOME_TESTIMONIALS.length / cardsPerScroll);

    if (direction === "next") {
      setActiveIndex((prevIndex) =>
        prevIndex + cardsPerScroll >= HOME_TESTIMONIALS.length
          ? 0
          : prevIndex + cardsPerScroll
      );
    } else if (direction === "prev") {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? (totalSlides - 1) * cardsPerScroll : prevIndex - cardsPerScroll
      );
    }
  };

  return (
<section className="relative text-center py-10 bg-[#0A2640] text-white">
  <p className="mb-8 text-2xl lg:text-4xl font-medium text-left w-full lg:w-[60%] leading-[1.5] pl-4 lg:pl-[6rem] pb-[3rem]">
    An enterprise template to ramp up your company website
  </p>

  <div className="absolute top-[6rem] lg:top-[7rem] right-[1rem] lg:right-[7rem] flex space-x-4 z-10">
    <Image
      src="/assets/images/caret-left.svg"
      width={50}
      height={50}
      alt="Previous"
      className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
      onClick={() => handleSwipe("prev")}
    />
    <Image
      src="/assets/images/caret-right.svg"
      width={50}
      height={50}
      alt="Next"
      className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
      onClick={() => handleSwipe("next")}
    />
  </div>

  <div className="w-full lg:w-[80%] my-[40px] mx-auto relative overflow-hidden">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${activeIndex * (100 / (isMobile ? 1 : 3))}%)`,
      }}
    >
      {HOME_TESTIMONIALS.map((testimonial, index) => (
        <div
          key={index}
          className={`${
            isMobile ? "w-[90%]" : "w-1/3"
          } flex-shrink-0 p-4 lg:p-6 bg-white rounded-lg shadow-md text-black mx-2`}
        >
          <p className="mb-4 text-left text-sm lg:text-base">{`"${testimonial.text}"`}</p>
          <div className="flex items-center">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full mr-3 lg:mr-4"
            />
            <div>
              <h4 className="font-bold text-sm lg:text-base mb-[0.2rem] lg:mb-[0.3rem]">
                {testimonial.name}
              </h4>
              <p className="text-xs lg:text-sm text-gray-600">
                {testimonial.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
