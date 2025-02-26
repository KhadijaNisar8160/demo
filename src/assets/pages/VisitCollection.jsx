import Footer from "./Footer";
import Header from "./Header";
import MenuList from "./MenuList";
import CategoryCollection from "./CategoryCollection";
const VisitCollection = () => {
  return (
    <div className="w-full">
      <Header />
      <MenuList />

      {/* Breadcrumb Navigation */}
      <div className="mx-4 md:mx-10 mt-5 text-sm">
        <a href="/" className="text-gray-600">
          <u>Home</u>
        </a>
        <span className="font-semibold text-gray-800"> - Vape Kits</span>
      </div>

      {/* Page Title */}
      <div className="px-4 md:px-10 lg:px-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center mt-6 md:mt-10">
          Vape Kits
        </h1>

        {/* Description */}
        <p className="text-center text-sm md:text-base font-semibold text-gray-800 mt-4 md:mt-6 md:max-w-3xl mx-auto">
          Shop vape kits with incredible flavor production, vape experience, and
          incredible battery life today. Each vape kit available at Mi-Pod
          provides an incredible experience for vapers. Whether you are new to
          vaping or an experienced vaper, we've got you covered with a
          high-quality easy-to-use vape device.
        </p>

        {/* Additional Info */}
        <p className="text-center text-xs md:text-sm mt-6 md:mt-10 mb-6 md:mb-10">
          Choose from hundreds of{" "}
          <a className="text-purple-700 font-bold">
            <u>vape juice flavors</u>
          </a>{" "}
          to fill your vape kit device at the Mi-Pod online vape shop.
        </p>
      </div>

      {/* Category Collection */}
      <CategoryCollection />

      <Footer />
    </div>
  );
};

export default VisitCollection;
