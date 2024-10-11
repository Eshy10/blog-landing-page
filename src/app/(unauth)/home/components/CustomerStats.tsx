import { ContentProps } from "@/types/global";
import StatsCard from "@/components/ui/cards/StatsCard";

const Content = ({ title, items, buttonLabel, buttonLink, isShowPieChart }: ContentProps) => (
  <div className="space-y-6">
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">{title}</h2>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-3">
          <span className="text-[#0A2640]">{item.icon}</span>
          <span className="text-lg">{item.text}</span>
        </li>
      ))}
    </ul>
    {buttonLabel && buttonLink && !isShowPieChart && (
      <a href={buttonLink} className="inline-block px-8 py-3 bg-[#0A2640] text-white rounded-lg text-lg font-semibold">
        {buttonLabel}
      </a>
    )}
  </div>
);

export default function CustomerStats() {

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <StatsCard
          imageUrl="/images/customer-connection-1.png"
          chartUrl="/images/chart-bar.png"
          chartBgColor="bg-blue-100"
          chartDescription="30% More income in June"
        />
        <Content
          title="We connect our customers with the best, and help them keep up-and stay open."
          items={[
            { icon: '✔️', text: 'We connect our customers with the best.' },
            { icon: '✔️', text: 'Advisor success customer launch party.' },
            { icon: '✔️', text: 'Business-to-consumer long tail.' },
          ]}
          buttonLabel="Start now"
          buttonLink="#"
        />

      </div>

      {/* Second Row with Image on Right */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Content
          title="We connect our customers with the best, and help them keep up-and stay open."
          items={[
            { icon: '✔️', text: 'We connect our customers with the best.' },
            { icon: '👁️', text: 'Advisor success customer launch party.' },
            { icon: '☀️', text: 'Business-to-consumer long tail.' },
          ]}
        />
        <StatsCard
          imageUrl="/images/customer-connection-2.png"
          chartUrl="/images/chart-pie.png"
          chartBgColor="bg-green-100"
          chartDescription="35% Agile Development"
        />

      </div>
    </section>
  );
}