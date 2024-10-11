"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero, CustomerStats, Faq, GetStarted, Services, Testimonials, Blog } from './components';


export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section data-aos="fade-up">
        <Hero />
      </section>
      <section data-aos="fade-right">
        <Services />
      </section>
      <section data-aos="fade-left">
        <CustomerStats />
      </section>
      <section data-aos="fade-up">
        <Testimonials />
      </section>
      <section data-aos="zoom-in">
        <Faq />
      </section>
      <section data-aos="fade-up">
        <Blog />
      </section>
      <section data-aos="flip-up" className="w-full">
        <GetStarted />
      </section>
    </>
  );
}
