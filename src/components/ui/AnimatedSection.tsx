import { SectionProps } from "@/types/global";

export default function AnimatedSection({ animation, children }: SectionProps) {
  return (
    <section data-aos={animation} className="w-full">
      {children}
    </section>
  );
}
