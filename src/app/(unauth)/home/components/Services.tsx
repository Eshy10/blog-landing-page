import ServiceCard from "@/components/ui/cards/ServiceCards";

export default function Services() {

  return (
    <section className="bg-[#0A2640] py-16 px-6 md:px-12 lg:px-24 text-center">
      {/* Section Title */}
      <div className="text-white mb-10">
        <p className="text-sm uppercase tracking-wide">Our services</p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Handshake infographic mass market <br />
          crowdfunding iteration.
        </h2>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard imageSrc="/images/service-1.png" title="Cool feature title" />
        <ServiceCard imageSrc="/images/service-2.png" title="Even cooler feature" />
        <ServiceCard imageSrc="/images/service-3.png" title="Cool feature title" />
      </div>
    </section>
  );
}
