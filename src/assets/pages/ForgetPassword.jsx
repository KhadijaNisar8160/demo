import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MenuList from "./MenuList";

function ForgetPassword() {
  return (
    <div>
      <Header />
      <MenuList />

      {/* Breadcrumbs */}
      <div className="mx-5 mt-5 text-sm">
        <a href="/" className="text-gray-600 underline">
          Home
        </a>
        <NavLink to="/app/ForgetPassword">
          <span className="font-semibold cursor-pointer"> - Account</span>
        </NavLink>
      </div>

      {/* Password Recovery Section */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Recover Password
          </h1>
          <p className="text-center text-sm font-semibold text-gray-600 my-4">
            Please enter your email:
          </p>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              className="w-full h-12 px-4 border border-gray-300  focus:outline-none placeholder-gray-600"
              placeholder="Email"
            />
          </div>

          {/* Recover Button */}
          <button className="relative overflow-hidden bg-black text-white font-bold p-3 w-full border border-transparent group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              RECOVER
            </span>
            <span className="absolute inset-0 bg-white translate-x-full transition-transform duration-300 ease-in-out group-hover:-translate-x-0"></span>
          </button>

          {/* Back to Login Link */}
          <div className="mt-6 text-center text-sm font-semibold text-gray-700">
            <p>
              Remember your password?{" "}
              <NavLink
                to="/app/Login"
                className="text-gray-600 hover:underline"
              >
                Back to Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ForgetPassword;
