import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MenuList from "./MenuList";

function SignUp() {
  return (
    <div>
      <Header />
      <MenuList />

      {/* Breadcrumb Navigation */}
      <div className="mx-5 mt-5 text-sm">
        <a href="/" className="text-gray-600 underline">
          Home
        </a>
        <NavLink to="/app/SignUp">
          <span className="font-semibold cursor-pointer">
            {" "}
            - Create Account
          </span>
        </NavLink>
      </div>

      {/* Sign Up Form Section */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            REGISTER
          </h1>
          <p className="text-center text-sm font-semibold text-gray-600 my-4">
            Please fill in the information below:
          </p>

          {/* First Name */}
          <div className="mb-4">
            <input
              type="text"
              className="w-full h-12 px-4 border border-gray-300  focus:outline-none placeholder-gray-600"
              placeholder="First name"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <input
              type="text"
              className="w-full h-12 px-4 border border-gray-300  focus:outline-none placeholder-gray-600"
              placeholder="Last name"
            />
          </div>

          {/* Birthday */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold">
              Birthday
            </label>
            <input
              type="date"
              className="w-full h-12 px-4 border border-gray-300  focus:outline-none text-gray-600"
              placeholder="mm/dd/yyyy"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              className="w-full h-12 px-4 border border-gray-300  focus:outline-none placeholder-gray-600"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              className="w-full h-12 px-4 border border-gray-300  focus:outline-none placeholder-gray-600"
              placeholder="Password"
            />
          </div>

          {/* Sign Up Button */}
          <button className="relative overflow-hidden bg-black text-white font-bold p-3 w-full border border-transparent group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              CREATE MY ACCOUNT
            </span>
            <span className="absolute inset-0 bg-white translate-x-full transition-transform duration-300 ease-in-out group-hover:-translate-x-0"></span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;
