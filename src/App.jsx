import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./assets/components/Authcontext";

import LandingPage from "./assets/pages/LandingPage.jsx";
import CartPage from "./assets/pages/CartPage.jsx";
import VisitCollection from "./assets/pages/VisitCollection.jsx";
import Login from "./assets/pages/Login.jsx";
import SignUp from "./assets/pages/SignUp.jsx";
import ForgetPassword from "./assets/pages/ForgetPassword.jsx";
import SearchProduct from "./assets/pages/SearchProduct.jsx";
import CartList from "./assets/pages/CartList.jsx";

import Collection from "./assets/pages/Collection.jsx";
import MenuList from "./assets/pages/MenuList.jsx";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/app/VisitCollection" element={<VisitCollection />} />
            <Route path="/app/Login" element={<Login />} />
            <Route path="/app/SignUp" element={<SignUp />} />
            <Route path="/app/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/SearchProduct" element={<SearchProduct />} />
            <Route path="/CartList" element={<CartList />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/MenuList" element={<MenuList />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
