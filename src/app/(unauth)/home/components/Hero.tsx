import Image from 'next/image';

export default function Hero() {

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-10 bg-white">
      <div className="md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Save time by building fast with Boldo Template
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="px-6 py-3 bg-[#0A2640] text-white rounded-full font-semibold">
            Buy template
          </button>
          <button className="px-6 py-3 border border-[#0A2640] text-[#0A2640] rounded-full font-semibold">
            Explore
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/images"
              alt="image-1"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <Image
            src="/images/"
            alt="image-2"
            width={200}
            height={150}
            className="rounded-lg"
          />
          <Image
            src="/images/"
            alt="image-3"
            width={200}
            height={150}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}