import { useState } from "react";
import { NavLink } from "react-router-dom";

const products = {
  "Mi-Pod PRO": [
    {
      name: "Helios Mi-Pod PRO +",
      price: "$29.99",
      image:
        "https://mipod.com/cdn/shop/files/Helios_1_Mi-Pod-PRO__600x600_5351146b-60e7-4d69-8529-0f1f0ced4df8_400x.png?v=1704405891",
    },
    {
      name: "Vermilion Mi-Pod PRO +",
      price: "$29.99",
      image:
        "https://mipod.com/cdn/shop/files/Vermilion_1_Mi-Pod-PRO__600x600_26393fa4-13c6-44b4-97db-f6a12aa112e1_400x.png?v=1704406363",
    },
    {
      name: "Silver Voyage Mi-Pod PRO +",
      price: "$29.99",
      image:
        "https://mipod.com/cdn/shop/products/Mipod-Pro-Plus_Silver-Voyage_B2C_600x600_bfcd5964-9509-45aa-ab72-f46acffbf7cd_400x.png?v=1675442227",
    },
    {
      name: "Pink Voyage Mi-Pod PRO +",
      price: "$29.99",
      image:
        "https://mipod.com/cdn/shop/products/Mipod-Pro-Plus_Pink-Voyage_B2C_600x600_13b95268-e309-49d9-8041-8888aeb601f6_400x.png?v=1675442214",
    },
  ],
  GeekVape: [
    {
      name: "GeekVape h45 kit",
      price: "$29.99",
      image:
        "https://mipod.com/cdn/shop/files/Geek-Vape_H45_Black_600x600_19008914-e4bc-476e-b432-d375056e9d4a_400x.png?v=1706283979",
    },
    {
      name: "GeekVape Sounder kit",
      price: "$19.99",
      image:
        "https://mipod.com/cdn/shop/files/Geek-Vape_Sonder-Black_600x600_c47e93e8-3798-4910-ad64-f44fcca57f43_400x.png?v=1716223758",
    },
    {
      name: "GeekVape L200 kit",
      price: "$29.99",
      image:
        "https://mipod.com/cdn/shop/files/Geek-Vape_L200-Black_600x600_1d32293f-40a5-4faf-97fb-3ceaabeb6906_400x.png?v=1716223847",
    },
    {
      name: "GeekVape Aegis Hero kit",
      price: "$69.99",
      image:
        "https://mipod.com/cdn/shop/files/Geek-Vape_Aegis-Hero_Black_600x600_74dbe375-7133-4f53-9be4-fe62eb73120e_400x.png?v=1730398295",
    },
  ],
  Vaporesso: [
    {
      name: "XROS Pods by Vaporesso",
      price: "$12.99",
      image:
        "https://mipod.com/cdn/shop/files/Pod_Xros-2_Vaperesso_600x600_28b090df-4f8f-49e1-8515-886641364920_400x.png?v=1699891111",
    },
    {
      name: "Vaporesso XROS 3",
      price: "$29.99",
      image:
        "https://mipod.com/cdn/shop/files/Icy-Silver_Xros-3_Vaperesso_600x600_ad1cdece-5342-42be-a06c-450d94ab8301_400x.png?v=1698846825",
    },
    {
      name: "Vaporesso XROS Corex 2.0",
      price: "$11.99",
      image:
        "https://mipod.com/cdn/shop/files/Corex_06_600x600_e9d4c2c3-f2c2-4586-acf0-3daa37338854_400x.png?v=1730398512",
    },
    {
      name: "Vaporesso XROS Corex 2.0",
      price: "$24.99",
      image:
        "https://mipod.com/cdn/shop/files/Aurora_Xros-2_Vaperesso_600x600_0d95ea19-3669-479c-987f-8d7de9d313bf_400x.png?v=1698342499",
    },
  ],
  SMOK: [
    {
      name: "SMOK Novo 4",
      price: "$29.99",
      image:
        "https://mipod.com/cdn/shop/files/Black-Armor_Novo-4_Smok_600x600_aa258517-b1b2-4341-952e-b57d3122f0df_400x.png?v=1698344614",
    },
    {
      name: "SMOK Novo mini 4",
      price: "$24.99",
      image:
        "https://mipod.com/cdn/shop/files/7-Color-Cobra_Novo-4-Mini_Smok_600x600_11b354d7-ac96-4758-bce3-1e7d448a930f_400x.png?v=1698345876",
    },
    {
      name: "SMOK Novo 3",
      price: "$24.99",
      image:
        "https://mipod.com/cdn/shop/files/Blue-And-Black_Novo-2_Smok_600x600_0ba2f09e-f5b0-407c-9711-7d681198cce2_400x.png?v=1698957898",
    },
    {
      name: "SMOK Novo 2",
      price: "$24.99",
      image:
        "https://mipod.com/cdn/shop/files/Gold-Cobra_Novo-3_Smok_600x600_2840f1ab-f507-4692-9103-eae66e86550d_400x.png?v=1701798445",
    },
  ],
};

export default function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState("Mi-Pod PRO");

  return (
    <div className="container mx-auto py-8">
      <h1 className=" text-2xl font-bold">
        ____________ V A P E <span className="ml-2">K I T S</span>
      </h1>
      <div className="p-5">
        <ul className="flex justify-center gap-8 font-semibold text-2xl p-5">
          {Object.keys(products).map((category) => (
            <li
              key={category}
              className={`cursor-pointer ${
                selectedCategory === category
                  ? "border-b-2 border-gray-700"
                  : "text-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        <div className="mt-5 text-center">
          {/* <h2 className="text-xl font-bold mb-3">
            {selectedCategory} Products
          </h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
            {Array.isArray(products[selectedCategory]) &&
              products[selectedCategory].map((product, index) => (
                <div key={index} className="justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 rounded"
                  />
                  <h2 className="text-center text-sm mt-4">{product.name}</h2>
                  <p className="text-gray-500 text-center font-medium">
                    {product.price}
                  </p>
                  <NavLink to="/CartPage">
                    <button className="mt-4 w-32  bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200">
                      ADD TO CART
                    </button>
                  </NavLink>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center p-16 border-b">
        <button className="relative overflow-hidden bg-black text-white font-bold p-3 w-64 border border-transparent group">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            VIEW ALL PRODUCTS
          </span>
          <span className="absolute inset-0 bg-white translate-x-full transition-transform duration-300 ease-in-out group-hover:-translate-x-0"></span>
        </button>
      </div>
    </div>
  );
}
