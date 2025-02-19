import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrowseSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    {
      src: "https://mipod.com/cdn/shop/products/melon-kiwi_airbar-nex_600x600_408fb072-0efb-40cb-9587-f3edb4f33d60_400x.png?v=1675277237",
      title: "All Disposables",
    },
    {
      src: "https://mipod.com/cdn/shop/files/cutouts-exclusive-2pk-mt-turbo-15000_aug2024_sampler-image_400x.png?v=1726084209",
      title: "Flonq Disposables",
    },
    {
      src: "https://mipod.com/cdn/shop/files/watermelon_ice_offstamp-KIT_600x600_cd97c6f2-9a1d-4f81-9278-0b43129fa670_400x.png?v=1704902217",
      title: "Katchmi Disposables",
    },
    {
      src: "https://mipod.com/cdn/shop/files/GEEK-B_2_5d96c458-3aed-4149-a0ee-9f67373376f7_400x.gif?v=1718137376",
      title: "Off Stamp Disposables",
    },
    {
      src: "https://mipod.com/cdn/shop/files/Katchmi_White-Gummy-Dream_F_Device_600x600_0793331f-f061-4cc0-9037-929f80f2a831_400x.png?v=1721926213",
      title: "Off Stamp Disposables",
    },
    {
      src: "https://mipod.com/cdn/shop/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb_400x.png?v=1726586240",
      title: "Off Stamp Disposables",
    },
    {
      src: "https://mipod.com/cdn/shop/files/Fcuking-Fab_Geek-Bar-Pulse_Device_600x600_1a6a03fd-2029-4cbc-aaaa-052842b14b47_400x.png?v=1699479100",
      title: "Off Stamp Disposables",
    },
    {
      src: "https://mipod.com/cdn/shop/files/Decadent_0__Flonq-Max-Smart_Sampler_400x.png?v=1704394198",
      title: "Off Stamp Disposables",
    },
    {
      src: "https://mipod.com/cdn/shop/files/GEEK-B_2_5d96c458-3aed-4149-a0ee-9f67373376f7_400x.gif?v=1718137376",
      title: "Off Stamp Disposables",
    },
    {
      src: "https://mipod.com/cdn/shop/files/Fcuking-Fab_Geek-Bar-Pulse_Device_600x600_1a6a03fd-2029-4cbc-aaaa-052842b14b47_400x.png?v=1699479100",
      title: "Off Stamp Disposables",
    },
    {
      src: "https://mipod.com/cdn/shop/files/Decadent_5__Flonq-Max-Smart_Sampler_400x.png?v=1704394170",
      title: "Off Stamp Disposables",
    },
  ];

  return (
    <div className="relative mx-auto pb-20 max-w-6xl">
      {/* Title */}
      <h2 className="text-center text-gray-700 text-2xl font-semibold p-6">
        BROWSE BY DISPOSABLE VAPES
      </h2>

      {/* Slider */}
      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="px-2">
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <div className="border rounded-xl bg-gray-100 p-4 shadow-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto rounded-lg object-contain"
                />
                <div className="text-gray-600 text-center mt-2">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <button className=" text-gray-700 px-4 py-2 mt-2 rounded-lg  transition">
                    Browse Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-md  transition"
          onClick={() => sliderRef.current.slickPrev()}
        >
          &#10094;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2  text-gray-900 bg-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
          onClick={() => sliderRef.current.slickNext()}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default BrowseSlider;
