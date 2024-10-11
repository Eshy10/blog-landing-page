import Image from "next/image";

export default function ServiceCard({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) {
  return (
    <div className="p-6 space-y-4 flex flex-col items-start">
      <Image
        src={imageSrc}
        alt={title}
        width={450}
        height={386}
        className="w-full"
      />
      <p className="text-base text-white mb-8">{title}</p>
      <a
        href="#"
        className="text-white font-medium flex items-center !mt-8"
      >
        <span>Explore page</span> <span className="ml-2">&rarr;</span>
      </a>
    </div>
  );
}
