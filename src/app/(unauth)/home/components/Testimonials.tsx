import React, { useState } from "react";
import { HOME_TESTIMONIALS } from "@/libs/data";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwipe = (direction: "next" | "prev") => {
    const totalSlides = Math.ceil(HOME_TESTIMONIALS.length / 3); 
    if (direction === "next") {
      setActiveIndex((prevIndex) =>
        prevIndex + 3 >= HOME_TESTIMONIALS.length ? 0 : prevIndex + 3
      );
    } else if (direction === "prev") {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? (totalSlides - 1) * 3 : prevIndex - 3
      );
    }
  };

  return (
    <section className="relative text-center py-10 bg-[#0A2640] text-white">
      <p className="mb-8 text-4xl font-meduim text-left w-[60%] leading-[1.5] pl-[6rem] pb-[3rem]">
        An enterprise template to ramp up your company website
      </p>
      <div className="absolute top-0 right-0 mt-[7rem] mr-[7rem] flex space-x-4 z-10">
        <Image
          src="/assets/images/caret-left.svg"
          width={50}
          height={50}
          alt="Previous"
          className="w-8 h-8 cursor-pointer"
          onClick={() => handleSwipe("prev")}
        />
        <Image
          src="/assets/images/caret-right.svg"
          width={50}
          height={50}
          alt="Next"
          className="w-8 h-8 cursor-pointer"
          onClick={() => handleSwipe("next")}
        />
      </div>
      <div className="w-[80%] my-[40px] mx-auto relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * (100 / 3)}%)`,
          }}
        >
          {HOME_TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0 p-6 bg-white rounded-lg shadow-md text-black mx-2"
            >
              <p className="mb-4 text-left">{`"${testimonial.text}"`}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold !text-base !mb-[0.3rem]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
