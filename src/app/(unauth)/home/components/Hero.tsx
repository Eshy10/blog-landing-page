import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  const logos = [
    { src: "/assets/images/boldo-logo-full.svg", alt: "Boldo" },
    { src: "/assets/images/presto-logo.svg", alt: "Presto" },
    { src: "/assets/images/boldo-logo-full.svg", alt: "Boldo" },
    { src: "/assets/images/presto-logo.svg", alt: "Presto" },
    { src: "/assets/images/boldo-logo-short.svg", alt: "Boldo" },
    { src: "/assets/images/presto-logo.svg", alt: "Presto" },
  ];
  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-10 bg-white">
        <div className="md:w-3/5 text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl md:leading-[1.3]  text-dark">
            Save time by building fast with Boldo Template
          </h1>
          <p className="text-gray-500 text-md md:text-lg w-11/12">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button
              className="px-6 py-3 rounded-full font-semibold"
              variant="dark"
            >
              Buy template
            </Button>
            <Button
              className="px-6 py-3 rounded-full font-semibold"
              variant="primary"
              outline="black"
            >
              Explore
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Image
                src="/assets/images/blue-card1.svg"
                alt="image-1"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <Image
              src="/assets/images/graph2.svg"
              alt="image-2"
              width={200}
              height={150}
              className="rounded-lg bg-[#394e63] p-2 h-[73%] w-full"
            />
            <Image
              src="/assets/images/blue-card2.svg"
              alt="image-2"
              width={200}
              height={150}
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 py-8 w-full">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={50}
            height={50}
            className="h-6 md:h-8 w-full"
          />
        ))}
      </div>
    </section>
  );
}
