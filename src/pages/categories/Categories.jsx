import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollTop from "../../components/ScrollToTop";
import { productcategories } from "../../components/Constants";
import { Link } from "react-router-dom";
import Popular from "../../components/categories/Popular";
import Jollof from "../../components/categories/Jollof";
import Swallow from "../../components/categories/Swallow";
import NewAdditionBanner from "../../components/NewAdditionBanner";

export default function Categories() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative">
        {/* Background Image */}
        <div className="h-[420px] bg-cover bg-center hero">
          <div className="absolute inset-0 bg-black/50  "></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 text-white">
          <h1 className="text-3xl md:text-4xl font-bold max-w-lg leading-tight">
            Chuks Kitchen
          </h1>

          <p className="mt-4 text-sm md:text-base max-w-md">
            Chucks Kitchen Nigerian Home cooking 4.8 (1.2k)
          </p>
        </div>
      </div>
      {/* menu categories dropdown */}
      <div className="px-5 mt-5 md:px-16">
        <p className="py-4 font-medium text-[26px] md:text-[32px]">
          Menu Categories
        </p>
        <select
          name=""
          id=""
          className="w-full py-3 bg-gray-200 p-3 rounded font-medium  "
        >
          {productcategories.map((productcategory) => (
            <option
              key={productcategory.id}
              value="select"
              className="border-l-2 font-medium"
            >
              {productcategory.name}
            </option>
          ))}
        </select>
      </div>
      {/* CATEGORIES SECTION */}
      <div className="pt-20 pb-16 px-6 md:px-16">
        <h2 className="text-center text-gray-800 font-semibold text-lg mb-10">
          Popular Categories
        </h2>
        <Popular />

        <p className="text-center mt-8 text-blue-400">
          {" "}
          <Link to="/categories">View All Categories</Link>
        </p>

        {/*  JOLLOF RICE CATEGORIES SECTION */}
        <h2 className="text-center text-gray-800 font-semibold text-lg mb-10 mt-10">
          Jollof Rice & Entrees
        </h2>
        <Jollof />
        <p className="text-center mt-8 text-blue-400">
          {" "}
          <Link to="#">View All Categories</Link>
        </p>

        {/*  CHEFS SPECIAL CATEGORIES SECTION */}
        <h2 className="text-center text-gray-800 font-semibold text-lg mb-10 mt-10">
          Swallow & Soup
        </h2>
        <Swallow />
        <p className="text-center mt-8 text-blue-400">
          {" "}
          <Link to="#">View All Categories</Link>
        </p>
        {/* NEW MENU SECTION */}
        <NewAdditionBanner />
      </div>
      {/* FOOTER */}
      <Footer />
      {/* SCROLL TOP */}
      <ScrollTop />
    </div>
  );
}
