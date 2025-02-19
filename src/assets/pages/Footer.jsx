const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="">
        <div className="mb-4 bg-[#efefef] items-center flex gap-6 h-32">
          <h2 className="text-sm text-gray-700 font-semibold ml-48 text-center">
            Subscribe and never miss out on our weekly
            <br /> Product Updates, Price Drops, and more!
          </h2>

          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="border border-gray-300 rounded-l-md px-4 h-12 py-2 w-72 focus:outline-none "
            />
            <button className="relative overflow-hidden bg-black text-white font-bold p-3 w-40 ml-4 border border-transparent group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                SUBSCRIBE
              </span>
              <span className="absolute inset-0 bg-white translate-x-full transition-transform duration-300 ease-in-out group-hover:-translate-x-0"></span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 mx-24 pt-20 gap-8">
          <div>
            <h3 className="font-semibold">SHOP</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Shop All
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Mi-Pod Kits
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Vape Kits
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Disposable Vapes
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Vape Juice
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Vape Pens
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">MI-ONE BRANDS</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Our Mission
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Community
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Wholesale
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Join The Team
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Rewards
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Military/First Responders
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">HELP</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                My Orders
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Order Tracking
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Guide Protection Claim
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Mi-Pod Warranty
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Help Center
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Contact Us
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Guide Package Protection FAQ
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                FAQ
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">NEWSROOM</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Blog
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">LEGAL</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Terms & Conditions
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Shipping Info
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Privacy Policy
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                FDA Disclaimer
              </li>
              <li className="hover:text-gray-900 text-gray-500 cursor-pointer text-sm font-bold">
                Refund Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 mx-24">
          <span className="text-sm">CUSTOMER SUPPORT - 03160638160</span>

          <div className="">
            <span className="text-sm">
              M™, MI-POD™, WI-POD™, MI-ONE®, MI®, MI-SALT®, OLD LOCO™, SV®,
              SMOKING VAPOR® ARE ALL TRADEMARKS OF SV3, LLC.
            </span>
          </div>
        </div>

        <div className="text-center mb-4 mx-24">
          <span className="text-sm font-bold text-gray-500">
            Welcome to Mipod.com, the Official Home of Mi-Pod, Wi-Pod, VaporLax,
            and S6XTH SENSE. Shop our Online Vape Shop for an assortment of
            Disposable Vapes, Premium Vape Juice, and the most reliable vape
            hardware. Create an account today and receive $10 off your first
            order AND Free Shipping for orders above $79.99. Shop direct with
            Mi-Pod, a leading distributor of the most popular vape brands on the
            market today.
          </span>
          <div className="mt-2">
            <span className="cursor-pointer font-bold text-gray-500 text-sm ">
              Your Privacy Choices
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
