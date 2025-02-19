import Header from "./Header";
import MenuList from "./MenuList";
import CategoryCollection from "./CategoryCollection";
import Footer from "./Footer";
const VisitCollection = () => {
  return (
    <div>
      <Header />
      <MenuList />
      <div className="mx-5 mt-5">
        <a href="/">
          <u>Home</u>
        </a>
        <span className="font-semibold cursor-pointer"> - Vape Kits</span>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center mt-10">Vape Kits </h1>
        <p className="text-center mx-32 mt-5 text-sm font-semibold text-gray-800">
          Shop vape kits with incredible flavor production, vape experience and
          incredible battery life today. Each vape kit available at Mi-Pod
          provides an incredible experience for vapers. Whether you are new to
          vaping, or an experience vaper, we've got you covered with a
          high-quality easy-to-use vape
          <br /> device.
        </p>
        <p className="text-center mt-10  mb-10">
          Choose from hundreds of{" "}
          <a className="text-purple-700 font-bold text-sm">
            <u> vape juice flavors</u>
          </a>{" "}
          to fill your vape kit device at the Mi-Pod online vape shop.
        </p>
        <CategoryCollection />
      </div>
      <Footer />
    </div>
  );
};

export default VisitCollection;
