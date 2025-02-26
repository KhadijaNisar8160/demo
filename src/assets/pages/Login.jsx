import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MenuList from "./MenuList";

function Login() {
  return (
    <div>
      <Header />
      <MenuList />

      {/* Breadcrumbs */}
      <div className="mx-5 mt-5 text-sm">
        <a href="/" className="text-gray-600 underline">
          Home
        </a>
        <NavLink to="/app/Login">
          <span className="font-semibold cursor-pointer"> - Account</span>
        </NavLink>
      </div>

      {/* Login Form Section */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            LOGIN
          </h1>
          <p className="text-center text-sm font-semibold text-gray-600 my-4">
            Please enter your email and password:
          </p>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              className="w-full h-12 px-2 border border-gray-300  focus:outline-none placeholder-gray-600"
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 flex items-center border border-gray-300 w-full h-12 px-2 ">
            <input
              type="password"
              className="w-full focus:outline-none placeholder-gray-600 "
              placeholder="Password"
            />
            <NavLink
              to="/app/ForgetPassword"
              className="text-xs text-gray-600 ml-2 whitespace-nowrap"
            >
              Forgot password?
            </NavLink>
          </div>

          {/* Login Button */}
          <button className="relative overflow-hidden bg-black text-white font-bold p-3 w-full  border border-transparent group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Login
            </span>
            <span className="absolute inset-0 bg-white translate-x-full transition-transform duration-300 ease-in-out group-hover:-translate-x-0"></span>
          </button>

          {/* Links for Signup and Wholesale */}
          <div className="mt-6 text-center text-sm font-semibold text-gray-700">
            <p>
              Don't have an account?{" "}
              <NavLink
                to="/app/SignUp"
                className="text-gray-600 hover:underline"
              >
                Create one
              </NavLink>
            </p>
            <p className="mt-2">
              Looking for Wholesale?{" "}
              <a href="#" className="text-gray-600 hover:underline">
                Click Here
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
