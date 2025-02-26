import Header from "./Header";
import MenuList from "./MenuList";
import ProductSlider from "./ProductSlider";
import Category from "./Category";
import ProductList from "./Productlist";
import BrowseSlider from "./BrowseSlider";
import TopBrands from "./TopBrands";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
// import CartPage from "./CartPage";
const LandingPage = () => {
  return (
    <div className="w-full">
      <Header />
      <MenuList />

      {/* Responsive Wrapper for Sliders & Main Sections */}
      <div className="px-4 md:px-5 lg:px-5">
        <ProductSlider />
        <Category />
        <ProductList />
        <BrowseSlider />
        <TopBrands />
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
