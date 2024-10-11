"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero, CustomerStats, Faq, GetStarted, Services, Testimonials, Blog } from './components';
import AnimatedSection from "@/components/ui/AnimatedSection";


export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <AnimatedSection animation="fade-up">
        <Hero />
      </AnimatedSection>
      <AnimatedSection animation="fade-right">
        <Services />
      </AnimatedSection>
      <AnimatedSection animation="fade-left">
        <CustomerStats />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" className="w-full">
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection animation="zoom-in">
        <Faq />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Blog />
      </AnimatedSection>
      <AnimatedSection animation="flip-up" className="w-full">
        <GetStarted />
      </AnimatedSection>
    </>
  );
}
