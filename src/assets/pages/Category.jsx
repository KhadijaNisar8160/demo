import { NavLink } from "react-router-dom";

const ProductCard = ({ imageSrc, title }) => {
  return (
    <div className="bg-purple-500 lg:w-[240px] w-[150px] rounded-lg  p-5 flex flex-col items-center ">
      <img src={imageSrc} alt={title} className="lg:w-96 lg:h-56" />
      <h3 className="text-white lg:text-lg text-sm font-bold mb-2">{title}</h3>
      <NavLink to="/app/VisitCollection">
        <button className=" text-white rounded-md text-xs px-2 lg:px-4 lg:py-2 font-bold hover:text-[#a556d6] border-2 border-white hover:bg-white">
          Visit Collection
        </button>
      </NavLink>
    </div>
  );
};

const Category = () => {
  const products = [
    {
      imageSrc:
        "https://mipod.com/cdn/shop/files/Vape-Kits_Category-Banners_320x380_1.png?v=1728409031&width=320", // Replace with actual image paths
      title: "Vape Kits",
    },
    {
      imageSrc:
        "https://mipod.com/cdn/shop/files/Nixodine_Category-Banners_320x380_1.png?v=1728408907&width=320",
      title: "Nixodine",
    },
    {
      imageSrc:
        "https://mipod.com/cdn/shop/files/Disposables_Category-Banners_320x380_1.png?v=1728408882&width=320",
      title: "Disposables",
    },
    {
      imageSrc:
        "https://mipod.com/cdn/shop/files/420_Category-Banners_320x380_1_1.png?v=1728408968&width=320",
      title: "Vaporizers",
    },
    {
      imageSrc:
        "https://mipod.com/cdn/shop/files/Vape-Juice_Category-Banners_320x380_1.png?v=1728409010&width=320",
      title: "Vape Juice",
    },
    {
      imageSrc:
        "https://mipod.com/cdn/shop/files/Nicotine_Pouches_Category-Banners_320x380_6966731a-8fd9-4ca6-ba37-c91d27a601a7.png?v=1728408931&width=320",
      title: "Pouches",
    },
  ];

  return (
    <div>
      {" "}
      <h1 className="lg:text-2xl text-xl text-gray-700 text-center p-10">
        BROWSE BY CATEGORY
      </h1>
      <div className="lg:flex grid grid-cols-2 justify-center lg:flex-wrap lg:gap-10 lg:p-5 py-5 ml-5 gap-5 gap-x-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
