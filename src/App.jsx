import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categories from "./pages/categories/Categories";
import ProductDetailsPage from "./pages/productdetails/ProductDetails";
import CartPage from "./pages/cart/Cart";
import OrderSummary from "./pages/ordersummary/OrderSummary";
import Onboarding from "./onboarding/Onboarding";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
