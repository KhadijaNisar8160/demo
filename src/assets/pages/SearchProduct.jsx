import Header from "./Header";
import MenuList from "./MenuList";
import Footer from "./Footer";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SearchProduct = () => {
  const products = [
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
    {
      name: "Blue B Ice Posh Max 2.0",
      brand: "Posh Disposables",
      price: "$15.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/files/Rifbar-TurboX-25k_Alaskan-Mint_Device_600x600_49c1f7c1-04aa-428f-9c4b-f1858e07c7fb.png?v=1726586240",
    },
    {
      name: "Iced Strawberry Lemon Cloud",
      brand: "Cloud Nurdz",
      price: "$10.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/Energy_10pk.png?v=1652409537",
    },
    {
      name: "Cranberry Puncher BC5000",
      brand: "EBCREATE",
      originalPrice: "$17.99",
      salePrice: "$12.99",
      image:
        "https://cdn.shopify.com/s/files/1/0070/8286/8772/products/pod-juice_aloe-grape.png?v=1670013858",
    },
  ];

  const brands = [
    { name: "AMMO", count: 4 },
    { name: "Adjust", count: 8 },
    { name: "Air Bar Disposables", count: 3 },
    { name: "Apollo", count: 1 },
    { name: "Beard Vape Co", count: 30 },
    { name: "Berserker", count: 6 },
    { name: "CCELL", count: 4 },
    { name: "Cloud Nurdz", count: 88 },
    { name: "Coastal Clouds", count: 61 },
    { name: "Crazy Ace", count: 21 },
    { name: "Digiflavor", count: 23 },
    { name: "EBCREATE", count: 36 },
    { name: "EBDESIGN", count: 1 },
    { name: "ELUX", count: 11 },
    { name: "EVO", count: 41 },
    { name: "EVODRIP", count: 1 },
    { name: "EZEE", count: 1 },
    { name: "FASTA", count: 41 },
    { name: "Flonq", count: 58 },
    { name: "Flum", count: 53 },
    { name: "Foger", count: 36 },
    { name: "Fruitia", count: 13 },
    { name: "Fume", count: 36 },
    { name: "Funky Republic", count: 20 },
    { name: "Geek Vape", count: 56 },
    { name: "HQD", count: 10 },
    { name: "Hidden Hills Club", count: 12 },
    { name: "Hyper Bar", count: 10 },
    { name: "I Love Salts", count: 18 },
    { name: "JUUL", count: 6 },
    { name: "Juice Head", count: 17 },
    { name: "Katchmi", count: 8 },
    { name: "Keep it 100", count: 8 },
    { name: "Lookah", count: 7 },
    { name: "Lost Mary", count: 123 },
    { name: "Lost Vape", count: 54 },
    { name: "MOJO", count: 7 },
    { name: "MTRX", count: 12 },
    { name: "Mad Hatter", count: 2 },
    { name: "Mi-One Brands", count: 2 },
    { name: "Mi-Pod", count: 23 },
    { name: "Mi-Pod PRO", count: 19 },
    { name: "Naked100", count: 11 },
    { name: "Nix Liquid", count: 28 },
    { name: "North", count: 9 },
    { name: "Off Stamp", count: 73 },
    { name: "Oxbar", count: 1 },
    { name: "PRM Bar", count: 12 },
    { name: "Palax", count: 18 },
    { name: "Pax", count: 18 },
    { name: "Pod Juice", count: 33 },
    { name: "Pod King", count: 14 },
    { name: "Posh Disposables", count: 7 },
    { name: "Prime Bar", count: 18 },
    { name: "Puff Bunny", count: 1 },
    { name: "Puffco", count: 37 },
    { name: "Pyne Pod", count: 11 },
    { name: "RAZ", count: 44 },
    { name: "RYL", count: 9 },
    { name: "RabBeats", count: 21 },
    { name: "RifBar", count: 24 },
    { name: "S6XTH SENSE", count: 3 },
    { name: "Sesh", count: 5 },
    { name: "Sili", count: 5 },
    { name: "Smok", count: 41 },
    { name: "Snoopy Smoke", count: 21 },
    { name: "Space Mary", count: 3 },
    { name: "Spaceman", count: 4 },
    { name: "Suicide Bunny", count: 12 },
    { name: "Suorin", count: 2 },
    { name: "UT Bar", count: 8 },
    { name: "UWELL", count: 7 },
    { name: "Urban Tale", count: 12 },
    { name: "VaporLax", count: 61 },
    { name: "Vaporesso", count: 10 },
    { name: "Viho", count: 9 },
    { name: "VooPoo", count: 5 },
    { name: "Yovo", count: 24 },
    { name: "Zeltu", count: 11 },
    { name: "Zimo", count: 9 },
    { name: "ZoVoo", count: 7 },
  ];
  const flavors = [
    { name: "Cactus", count: 1 },
    { name: "Matcha", count: 1 },
    { name: "Cinnamon", count: 2 },
    { name: "Lychee", count: 3 },
    { name: "Strawberry", count: 3 },
    { name: "Coffee", count: 4 },
    { name: "Chocolate", count: 6 },
    { name: "Vanilla", count: 7 },
    { name: "Clear", count: 12 },
    { name: "Menthol", count: 19 },
    { name: "Tobacco", count: 25 },
    { name: "Coconut", count: 29 },
    { name: "Pineapple", count: 53 },
    { name: "Cherry", count: 57 },
    { name: "Banana", count: 61 },
    { name: "Grape", count: 64 },
    { name: "Kiwi", count: 69 },
    { name: "Beverage", count: 84 },
    { name: "Apple", count: 90 },
    { name: "Mango", count: 95 },
    { name: "Peach", count: 125 },
    { name: "Tropical fruit", count: 127 },
    { name: "Mint", count: 131 },
    { name: "Dessert", count: 162 },
    { name: "Citrus", count: 204 },
    { name: "Melon", count: 211 },
    { name: "Fruit and ice", count: 401 },
    { name: "Berry", count: 571 },
    { name: "Fruit", count: 857 },
  ];
  const categories = [
    { name: "Disposable Vape", count: 1129 },
    { name: "Vape Juice", count: 264 },
    { name: "Clearance Vapes", count: 214 },
    { name: "420 Hardware", count: 61 },
    { name: "Vape Kits", count: 39 },
    { name: "Replacement Pods", count: 28 },
    { name: "Vape Bundles", count: 5 },
  ];
  const [selectedBrand, setSelectedBrand] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [sortOption, setSortOption] = useState("relevant"); // Sorting state

  // ** Filtered Products **
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedBrand
        ? product.brand?.toLowerCase() === selectedBrand.toLowerCase()
        : true
    )
    .filter((product) =>
      selectedFlavor
        ? product.flavor?.toLowerCase() === selectedFlavor.toLowerCase()
        : true
    )
    .filter((product) =>
      selectedCategory
        ? product.category?.toLowerCase() === selectedCategory.toLowerCase()
        : true
    );

  // ** Sorting Logic **
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "priceLowHigh":
        return a.price - b.price;
      case "priceHighLow":
        return b.price - a.price;
      case "dateOldNew":
        return new Date(a.date) - new Date(b.date);
      case "dateNewOld":
        return new Date(b.date) - new Date(a.date);
      case "alphaAZ":
        return a.name.localeCompare(b.name);
      case "alphaZA":
        return b.name.localeCompare(a.name);
      default:
        return 0; // Most Relevant (No Sorting)
    }
  });

  // ** Pagination Logic **
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // ** Handlers **
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  return (
    <div>
      <Header />
      <MenuList />

      {/* Breadcrumb */}
      <div className="mx-5 mt-5 text-sm">
        <a href="/" className="text-gray-600 underline">
          Home
        </a>
        <NavLink to="/SearchProduct">
          <span className="font-semibold cursor-pointer"> - Search</span>
        </NavLink>
      </div>

      {/* Main Container */}
      <div className="container mx-auto p-5 flex flex-wrap gap-5">
        {/* Sidebar Filters - Hidden on Mobile */}
        <div className="w-full md:w-64 md:block ">
          <h1 className="text-xl font-bold mb-4">
            {filteredProducts.length} items
          </h1>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-purple-400 outline-none rounded p-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* No Product Found Message */}
          {searchTerm && filteredProducts.length === 0 && (
            <p className="text-red-500">No product found</p>
          )}

          {/* Filters */}
          <div className="space-y-4">
            {/* Product Types */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                PRODUCT TYPES
              </label>
              <select
                className="mt-1 block w-full border border-purple-400 outline-none rounded p-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select a filter</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Brands */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                BRANDS
              </label>
              <select
                className="mt-1 block w-full border border-purple-400 outline-none rounded p-2"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">Select a filter</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand.name}>
                    {brand.name} ({brand.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Flavor */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                FLAVOR
              </label>
              <select
                className="mt-1 block w-full border border-purple-400 outline-none rounded p-2"
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
              >
                <option value="">Select a filter</option>
                {flavors.map((flavor, index) => (
                  <option key={index} value={flavor.name}>
                    {flavor.name} ({flavor.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                PRICE
              </label>
              <input
                type="range"
                min="2"
                max="420"
                className="w-full mt-1"
                style={{ accentColor: "#9A6DAD" }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            {/* Results per Page */}
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700">
                Results
              </label>
              <select
                className="mt-1 block w-20 border border-purple-400 outline-none rounded p-2"
                value={productsPerPage}
                onChange={handleProductsPerPageChange}
              >
                <option value="6">6</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
            </div>

            {/* Sorting Options */}
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700">
                Sort
              </label>
              <select
                className="mt-1 block w-full border border-purple-400 outline-none rounded p-2"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="relevant">Most Relevant</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="dateOldNew">Date: Oldest to Newest</option>
                <option value="dateNewOld">Date: Newest to Oldest</option>
                <option value="alphaAZ">Alphabetical: A to Z</option>
                <option value="alphaZA">Alphabetical: Z to A</option>
              </select>
            </div>
          </div>

          {/* Product Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded p-4 shadow-lg"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 w-full mb-2 object-cover"
                  />
                  <h2 className="text-md font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-500">{product.brand}</p>
                  <p className="text-lg font-bold">
                    {product.salePrice || product.price}
                  </p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                  {product.salePrice && (
                    <span className="text-green-500 text-sm">On sale</span>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                {searchTerm
                  ? "No products found."
                  : "Enter a search term to find products."}
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-5">
            <button
              className="px-4 py-2 bg-gray-300 rounded-l disabled:opacity-50"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span className="px-4 py-2 bg-[#9A6DAD] text-white">
              {currentPage} / {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-300 rounded-r disabled:opacity-50"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchProduct;
