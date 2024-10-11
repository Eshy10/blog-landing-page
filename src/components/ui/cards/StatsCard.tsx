import { StatCardProps } from "@/types/global";

export default function StatsCard({ imageUrl, chartUrl, children }: StatCardProps){
return (
    <div className="relative">
    <img src={imageUrl} alt="Customer" className="rounded-xl object-cover w-full" />
    <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 bg-white shadow-md rounded-xl p-6 w-2/3 mx-auto">
        <div className={`rounded-full flex flex-col items-center justify-center`}>
          <img src={chartUrl} alt="Chart Icon" />
          {children}
        </div>
    </div>
  </div>
)
}