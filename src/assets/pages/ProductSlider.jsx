import { useState, useEffect } from "react";

const images = [
  "https://mipod.com/cdn/shop/files/Mi-Pod-Nixodine_Hero-Banner_Desktop_1920x800_2-10-2025_1000x.png?v=1739293072",
  "https://mipod.com/cdn/shop/files/Off-Stamp-X-Cube_Hero-Banner_Desktop_1920x800_1-14-2025_1000x.png?v=1736951938",
  "https://mipod.com/cdn/shop/files/Fifty-Bar-Hidden-Hills-New-Flavors_Hero-Banner_Desktop_1920x800_2-14-2025_1000x.png?v=1739561827",
  "https://mipod.com/cdn/shop/files/LM-MT15000-Turbo_New-Flavors_Hero-Banner_Desktop_1920x800_1-23-2025_1000x.png?v=1737653338",
  "https://mipod.com/cdn/shop/files/Fasta-Burrst_Hero-Banner_Desktop_1920x800_10-23-2024_1000x.png?v=1729788783",
  "https://mipod.com/cdn/shop/files/Lost-Mary-MT15000-Turbo_20mg_Hero-Banner_Desktop_1920x800_9-4-2024_1000x.png?v=1725485651",
  "https://mipod.com/cdn/shop/files/Fifty-Bar-Fruitia_Hero-Banner_Desktop_1920x800_11-15-2024_1000x.png?v=1731697910",
  "https://mipod.com/cdn/shop/files/Berserker_Hero-Banner_Desktop_1920x800_11-22-2024_1000x.png?v=1734127014",
  "https://mipod.com/cdn/shop/files/Caffeine-Pouches_Hero-Banner_Desktop_1920x800_12-17-2024_1000x.png?v=1734460119",
  "https://mipod.com/cdn/shop/files/Flonq-Pro_Hero-Banner_Desktop_1920x800_12-16-2024_4e651f97-9343-4284-b924-a230e68edfaa_1000x.png?v=1734451271",
];

const ProductSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-4 md:px-8 lg:px-16 mt-5">
      {/* Main Image Slider */}
      <div className="w-full sm:w-[90%] md:w-[750px] h-44 sm:h-56 md:h-72 lg:h-96 rounded-md overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          className="w-full h-full object-cover cursor-pointer rounded-md"
        />
      </div>

      {/* Side Images */}
      <div className="flex flex-col gap-3 w-full sm:w-auto">
        <img
          src="https://mipod.com/cdn/shop/files/Lower-Nicotine-Vapes_Hero-Banner_Desktop_1920x800_7f0ef51f-cf02-4961-b173-8319bc8944bc_1600x.png?v=1724264504"
          className="h-24 sm:h-32 md:h-40 lg:h-48 w-full sm:w-auto rounded-md cursor-pointer"
        />
        <img
          src="https://mipod.com/cdn/shop/files/Zimo-Original_Hero-Banner_Desktop_1920x800_12-4-2024_1600x.png?v=1734127014"
          className="h-24 sm:h-32 md:h-40 lg:h-48 w-full sm:w-auto rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductSlider;
