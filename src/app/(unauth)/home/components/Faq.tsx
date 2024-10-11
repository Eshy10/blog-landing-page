"use client";
import { useState } from "react";
import Image from "next/image";
import { HOME_ACCORDION } from "@/libs/data";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-between gap-8 px-8 py-12">
      <div className="w-full">
        <Image
          src="/assets/images/employees.svg"
          alt="Office workspace"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-3xl font-semibold w-[90%] md:w-[40%]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>
        <div className="space-y-4 flex-1 ml-4">
          {HOME_ACCORDION.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 text-lg font-medium text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <Image
                  src="/assets/images/blue-caret-down.svg"
                  alt="Office workspace"
                  width={25}
                  height={25}
                  className={`transform transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {activeIndex === index && (
                <div className="py-2 text-gray-600">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
