export default function ServiceCard({ imageSrc, title }: { imageSrc: string; title: string }) {
  return (
    <div className="bg-white rounded-xl p-6 space-y-4">
      <div className="rounded-lg bg-green-100 flex items-center justify-center h-40">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <a href="#" className="text-[#0A2640] font-semibold flex items-center space-x-2">
        <span>Explore page</span> <span>&rarr;</span>
      </a>
    </div>
  );
}