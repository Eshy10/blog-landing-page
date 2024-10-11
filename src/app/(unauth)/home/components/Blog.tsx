import { useState } from "react";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ui/cards/ProductCard";
import { LATEST_NEWS } from "@/libs/data";

export default function Blog() {
  const [visibleNews, setVisibleNews] = useState(3); 

  const handleLoadMore = () => {
    setVisibleNews((prevVisible) => prevVisible + 3); 
  };

  const hasMoreNews = visibleNews < LATEST_NEWS.length; 

  return (
    <section>
      <div className="flex flex-col gap-5 items-center">
        <p className="text-center mt-20 text-gray-500 text-lg">Blog</p>
        <p className="text-center text-[#0A2640] text-4xl w-[60%]">Value Proposition accelerator product management venture</p>
      </div>
      <div className="mt-28 px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {LATEST_NEWS.slice(0, visibleNews).map((news, index) => (
            <ProductCard product={news} key={index} />
          ))}
        </div>
        {hasMoreNews && (
          <Button
            onClick={handleLoadMore}
            className="block mx-auto mt-20 w-[219px] h-12 rounded-full"
            outline="black"
          >
            Load more
          </Button>
        )}
      </div>
    </section>
  );
}
