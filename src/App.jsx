import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./assets/components/Authcontext";

import LandingPage from "./assets/pages/LandingPage.jsx";
import CartPage from "./assets/pages/CartPage.jsx";
import VisitCollection from "./assets/pages/VisitCollection.jsx";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/app/VisitCollection" element={<VisitCollection />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
