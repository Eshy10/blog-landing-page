import { ContentProps } from "@/types/global";
import Image from "next/image";
import StatsCard from "@/components/ui/cards/StatsCard";

const Content = ({
  title,
  items,
  buttonLabel,
  buttonLink,
  isShowPieChart,
}: ContentProps) => (
  <div className="space-y-6">
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
      {title}
    </h2>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li
          key={index}
          className={`flex items-center space-x-3 ${
            isShowPieChart
              ? `border p-4 shadow-md rounded-lg ${
                  index === 0 ? "bg-[#0A2640] text-white" : ""
                }`
              : ""
          }`}
        >
          <Image
            src={item.icon}
            alt="Icon"
            width={24}
            height={24}
            className="inline-block"
          />
          <span
            className={`text-lg ${index === 0 && isShowPieChart ? "text-white" : ""}`}
          >
            {item.text}
          </span>
        </li>
      ))}
    </ul>
    {buttonLabel && buttonLink && !isShowPieChart && (
      <a
        href={buttonLink}
        className="inline-block px-8 py-3 bg-[#0A2640] text-white rounded-lg text-lg font-semibold"
      >
        {buttonLabel}
      </a>
    )}
  </div>
);

export default function CustomerStats() {
  const barContent = (
    <div>
      <p className="font-semibold text-lg">30%</p>
      <p className="text-sm text-[#0A2640]">More income in June</p>
    </div>
  );

  const pieContent = (
    <ul className="list-disc">
      <li className="text-sm marker:text-pink-500">
        35%- <span className="ml-1">Agile Development</span>
      </li>
      <li className="text-sm text-[#0A2640] marker:text-blue-500">
        30%- <span className="ml-1">Investor Bandwidth</span>
      </li>
      <li className="text-sm text-[#0A2640] marker:text-yellow-500">
        30%- <span className="ml-1">A/B Testing</span>
      </li>
    </ul>
  );
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <StatsCard
          imageUrl="/assets/images/man-call.svg"
          chartUrl="/assets/images/blue-dark-graph.svg"
          chartBgColor="bg-blue-100"
        >
          {barContent}
        </StatsCard>
        <Content
          title="We connect our customers with the best, and help them keep up-and stay open."
          items={[
            {
              icon: "/assets/images/filled-checked.svg",
              text: "We connect our customers with the best.",
            },
            {
              icon: "/assets/images/filled-checked.svg",
              text: "Advisor success customer launch party.",
            },
            {
              icon: "/assets/images/filled-checked.svg",
              text: "Business-to-consumer long tail.",
            },
          ]}
          buttonLabel="Start now"
          buttonLink="#"
        />
      </div>

      <div className=" my-[10rem] lg:mt-[20rem] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Content
          title="We connect our customers with the best, and help them keep up-and stay open."
          items={[
            {
              icon: "/assets/images/star-white.svg",
              text: "We connect our customers with the best.",
            },
            {
              icon: "/assets/images/star.svg",
              text: "Advisor success customer launch party.",
            },
            {
              icon: "/assets/images/sun.svg",
              text: "Business-to-consumer long tail.",
            },
          ]}
          isShowPieChart
        />
        <StatsCard
          imageUrl="/assets/images/girl-laptop.svg"
          chartUrl="/assets/images/pie-chart.svg"
          chartBgColor="bg-green-100"
        >
          {pieContent}
        </StatsCard>
      </div>
    </section>
  );
}
