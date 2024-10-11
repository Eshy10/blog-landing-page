import Slider, { CustomArrowProps } from 'react-slick';
import { HOME_TESTIMONIALS } from '@/libs/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Testimonials() {

  const NextArrow = ({ onClick }: CustomArrowProps) => {
    return (
      <div
        className="absolute top-0 right-0 z-10 mt-[-2rem] mr-8 cursor-pointer"
        onClick={onClick}
      >
        <img src="/path/to/right-arrow-icon.svg" alt="Next" className="w-8 h-8" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: CustomArrowProps) => {
    return (
      <div
        className="absolute top-0 right-16 z-10 mt-[-2rem] mr-8 cursor-pointer"
        onClick={onClick}
      >
        <img src="/path/to/left-arrow-icon.svg" alt="Previous" className="w-8 h-8" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative text-center py-10 bg-blue-900 text-white">
      <h2 className="mb-8 text-2xl font-semibold">
        An enterprise template to ramp up your company website
      </h2>
      <Slider {...settings}>
        {HOME_TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md text-black">
            <p className="mb-4">{`"${testimonial.text}"`}</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
