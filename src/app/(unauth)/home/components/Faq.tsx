"use client"
import { useState } from 'react';
import { HOME_ACCORDION } from '@/libs/data';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-12">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/path/to/your-image.jpg"
          alt="Office workspace"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Accordion Section */}
      <div className="w-full md:w-1/2">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>

          {/* Accordion Items */}
          <div className="space-y-4">
            {HOME_ACCORDION.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="w-full flex justify-between items-center py-4 text-lg font-medium text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="py-2 text-gray-600">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}