import Slider from "react-slick";
import Image from "next/image";

interface LogoSliderProps {
  logos: string[];
}

const LogoSlider: React.FC<LogoSliderProps> = ({ logos }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full max-w-[1216px] px-[48px] py-[56px] flex flex-col gap-[8px] rounded-[16px] bg-white shadow-xl">
      <Slider {...settings}>
        {logos.map((src, idx) => (
          <div key={idx} className="flex justify-center">
            <Image
              src={src}
              alt={`Logo ${idx + 1}`}
              width={160}
              height={32}
              className="object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
