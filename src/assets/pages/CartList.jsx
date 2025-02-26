import Header from "./Header";
import MenuList from "./MenuList";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import CartForm from "./CartForm";

const CartList = () => {
  return (
    <div>
      <Header />
      <MenuList />

      {/* Cart Empty Section */}
      <div className="h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-gray-600 text-lg sm:text-xl font-semibold">
          YOUR CART IS EMPTY
        </h1>
        <p className="text-gray-700 p-4 font-bold text-sm sm:text-base">
          Spend $79.99 more and get free shipping!
        </p>

        <NavLink to="/Collection">
          <button className="relative overflow-hidden bg-black text-white font-bold py-3 px-5 w-full sm:w-fit border border-transparent group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              SHOP OUR PRODUCTS
            </span>
            <span className="absolute inset-0 bg-white translate-x-full transition-transform duration-300 ease-in-out group-hover:-translate-x-0"></span>
          </button>
        </NavLink>
      </div>

      <CartForm />
      <Footer />
    </div>
  );
};

export default CartList;
