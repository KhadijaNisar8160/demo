import Header from "./Header";
import MenuList from "./MenuList";
import ProductSlider from "./ProductSlider";
import Category from "./Category";
import ProductList from "./Productlist";
import BrowseSlider from "./BrowseSlider";
import TopBrands from "./TopBrands";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import CartPage from "./CartPage";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <MenuList />
      <ProductSlider />
      <Category />
      <ProductList />
      <BrowseSlider />
      <TopBrands />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
