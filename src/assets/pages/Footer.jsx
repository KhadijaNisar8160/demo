import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100">
      {/* Subscription Section */}
      <div className="bg-[#efefef] flex flex-col md:flex-row items-center justify-center gap-6 py-8 px-6 text-center md:text-left">
        <h2 className="text-sm text-gray-700 font-semibold max-w-lg">
          Subscribe and never miss out on our weekly <br /> Product Updates,
          Price Drops, and more!
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-gray-300 rounded-md px-4 h-12 w-full md:w-72 focus:outline-none"
          />
          <button className="relative overflow-hidden bg-black text-white font-bold p-3 w-full md:w-40 border border-transparent group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              SUBSCRIBE
            </span>
            <span className="absolute inset-0 bg-white translate-x-full transition-transform duration-300 ease-in-out group-hover:-translate-x-0"></span>
          </button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 md:px-16 py-10 text-center md:text-left">
        {[
          {
            title: "SHOP",
            links: [
              { text: "Shop All", to: "/Collection" },
              { text: "Mi-Pod Kits", to: "/app/VisitCollection" },
              "Vape Kits",
              "Disposable Vapes",
              "Vape Juice",
              "Vape Pens",
            ],
          },
          {
            title: "MI-ONE BRANDS",
            links: [
              "Our Mission",
              "Community",
              "Wholesale",
              "Join The Team",
              "Rewards",
              "Military/First Responders",
            ],
          },
          {
            title: "HELP",
            links: [
              "My Orders",
              "Order Tracking",
              "Guide Protection Claim",
              "Mi-Pod Warranty",
              "Help Center",
              "Contact Us",
              "Guide Package Protection",
              "FAQ",
            ],
          },
          {
            title: "NEWSROOM",
            links: ["Blog"],
          },
          {
            title: "LEGAL",
            links: [
              "Terms & Conditions",
              "Shipping Info",
              "Privacy Policy",
              "FDA Disclaimer",
              "Refund Policy",
            ],
          },
        ].map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-sm text-gray-800">
              {section.title}
            </h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              {section.links.map((link, i) =>
                typeof link === "string" ? (
                  <li
                    key={i}
                    className="hover:text-gray-900 cursor-pointer text-xs font-bold"
                  >
                    {link}
                  </li>
                ) : (
                  <NavLink key={i} to={link.to}>
                    <li className="hover:text-gray-900 cursor-pointer text-xs font-bold">
                      {link.text}
                    </li>
                  </NavLink>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center px-6 md:px-16 py-4 text-gray-600">
        <span className="text-sm font-bold block">
          CUSTOMER SUPPORT - 111-111111111
        </span>

        <p className="text-xs mt-2">
          M™, MI-POD™, WI-POD™, MI-ONE®, MI®, MI-SALT®, OLD LOCO™, SV®, SMOKING
          VAPOR® ARE ALL TRADEMARKS OF SV3, LLC.
        </p>

        <p className="text-xs mt-4 font-bold text-gray-500">
          Welcome to Mipod.com, the Official Home of Mi-Pod, Wi-Pod, VaporLax,
          and S6XTH SENSE. Shop our Online Vape Shop for an assortment of
          Disposable Vapes, Premium Vape Juice, and the most reliable vape
          hardware. Create an account today and receive $10 off your first order
          AND Free Shipping for orders above $79.99. Shop direct with Mi-Pod, a
          leading distributor of the most popular vape brands on the market
          today.
        </p>

        <div className="mt-4">
          <span className="cursor-pointer font-bold text-gray-500 text-sm">
            Your Privacy Choices
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
