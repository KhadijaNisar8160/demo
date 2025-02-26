import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import MenuList from "./MenuList";
import Footer from "./Footer";
import CategoryCollection from "./CategoryCollection";
const Collection = () => {
  return (
    <div>
      <Header />
      <MenuList />
      <div className="mx-5 mt-5">
        <a href="/">
          <u className="text-sm">Home</u>
        </a>
        <NavLink to="/SearchProduct">
          <span className="font-semibold text-sm cursor-pointer">- ALL</span>
        </NavLink>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-gray-800 font-bold">ALL</h1>
        <CategoryCollection />
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
