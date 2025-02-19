const navItems = [
  { title: "VAPE KITS", description: "Explore a variety of vape kits." },
  { title: "VAPE PODS", description: "Find the best vape pods available." },
  { title: "VAPE JUICE", description: "Discover delicious vape juices." },
  { title: "DISPOSABLE VAPES", description: "No hassle, just vape." },
  { title: "NIXODINE", description: "Experience our unique Nixodine product." },
  {
    title: "NICOTINE POUCHES",
    description: "Explore our nicotine pouch options.",
  },
  { title: "VAPORIZERS", description: "Find your ideal vaporizer." },
  { title: "DEALS", description: "Check out our latest deals." },
  { title: "ABOUT US", description: "Learn more about our company." },
];

const MenuList = () => {
  return (
    <div className="bg-white border-b ">
      <ul className="flex justify-center space-x-8 p-4">
        {navItems.map((item) => (
          <li key={item.title} className="relative cursor-pointer group ">
            <span className="text-gray-800 font-semibold">{item.title}</span>
            <span className="hidden  group-hover:block absolute left-0 top-full mt-1 bg-white text-black text-sm p-2 rounded w-40 h-32 shadow-lg">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
