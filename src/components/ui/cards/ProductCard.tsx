import { ProductCardProps } from "@/types/global";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-2.5 w-[298px] sm:w-full">
      <img src={product.newsAvatarUrl} alt="news picture" className="w-full h-auto object-cover" />
      <div className="flex mt-4">
        <p className="text-[#0A2640] font-bold">{product.category}</p>
        <p className="text-gray-500 ml-4">{product.date}</p>
      </div>
      <p className="text-lg font-normal leading-8 mt-4 h-[100px]">{product.newsContent}</p>
      <div className="flex items-center mt-4">
        <img
          src={product.authorAvatarUrl}
          alt="author url"
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="ml-4 text-gray-500">{product.authorName}</p>
      </div>
    </div>
  );
}
