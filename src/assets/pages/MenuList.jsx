const MenuList = () => {
  return (
    <div></div>
    // <div className="bg-white border-b">
    //   <ul className="flex justify-center space-x-8 p-4">
    //     {navItems.map((item) => (
    //       <li key={item.title} className="relative group">
    //         <span className="text-gray-800 font-semibold cursor-pointer">
    //           {item.title}
    //         </span>

    //         {/* Fixed width mega menu */}
    //         <div className="absolute left-1/2 -translate-x-1/5  top-full w-[800px] bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-lg border">
    //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
    //             {Object.entries(item.subItems).map(([header, subItems]) => (
    //               <div key={header}>
    //                 <h2 className="text-lg font-semibold mb-3">{header}</h2>
    //                 <ul>
    //                   {subItems.map((subItem, index) => (
    //                     <li
    //                       key={index}
    //                       className="mb-2 hover:text-blue-500 cursor-pointer"
    //                     >
    //                       {subItem}
    //                     </li>
    //                   ))}
    //                 </ul>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default MenuList;
