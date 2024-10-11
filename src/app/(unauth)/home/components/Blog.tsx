import Button from "@/components/ui/Button";
import ProductCard from "@/components/ui/cards/ProductCard";
import { LATEST_NEWS } from "@/libs/data";

export default function Blog() {

  return (
    <section>
      <section className="flex flex-col gap-5 border-b border-[#0A2640]">
        <p className="text-center mt-20 text-[#0A2640] text-lg">Blog</p>
        <h2 className="text-center text-[#0A2640] text-4xl font-manrope">Thoughts and Words</h2>
        <div className="flex flex-col md:flex-row items-center pb-12">
          <img src={'/'} alt="" className="w-[450px] h-[386px] object-cover" />
          <div className="mt-8 md:ml-20">
            <div className="flex">
              <p className="font-bold text-[#0A2640]">Category</p>
              <p className="text-gray-500 ml-4">November 22, 2021</p>
            </div>
            <p className="text-4xl font-normal leading-[72px] mt-4">Pitch termsheet backing validation focus release.</p>
            <div className="flex items-center mt-4">
              <img src={'/'} alt="" className="w-6 h-6 object-cover rounded-full" />
              <p className="ml-4 text-sm">Chandler Bing</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-28 px-20">
        <h2 className="font-manrope text-3xl font-normal leading-[72px]">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {LATEST_NEWS.map((news, index) => (
            <ProductCard product={news} key={index} />
          ))}
        </div>
        <Button className="block mx-auto mt-20 w-[219px] h-12" outline="black">
          Load more
        </Button>
      </div>

    </section>
  );
}