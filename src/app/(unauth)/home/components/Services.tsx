import ServiceCard from "@/components/ui/cards/ServiceCards";

export default function Services() {

  return (
    <section className="bg-[#0A2640] py-16 px-6 md:px-12 lg:px-24 text-center">
      <div className="text-white mb-10">
        <p className="text-sm uppercase tracking-wide mb-4">Our services</p>
        <h2 className="text-2xl md:text-3xl font-medium leading-tight">
          Handshake infographic mass market <br />
          crowdfunding iteration.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard imageSrc="/assets/images/man-suit-long.svg" title="Cool feature title" />
        <ServiceCard imageSrc="/assets/images/handshake.svg" title="Even cooler feature" />
        <ServiceCard imageSrc="/assets/images/man-sitting.svg" title="Cool feature title" />
      </div>
    </section>
  );
}
