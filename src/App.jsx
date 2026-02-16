import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categories from "./pages/categories/Categories";


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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
    </Router>
    
  );
}

export default App;
