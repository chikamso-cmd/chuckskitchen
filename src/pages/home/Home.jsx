
import Navbar from "../../components/Navbar";
import CategoryCard from "../../components/CategoryCard";
import { FaSearch } from "react-icons/fa";
import Footer from "../../components/Footer";
import ScrollTop from "../../components/ScrollToTop";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="h-[420px] bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-food.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 text-white">
          <h1 className="text-3xl md:text-4xl font-bold max-w-lg leading-tight">
            The Heart of Nigerian Home Cooking
          </h1>

          <p className="mt-4 text-sm md:text-base max-w-md">
            Handcrafted with passion, delivered with care.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md text-sm font-medium w-fit transition">
            Discover what's new
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[50%]">
          <div className="bg-white shadow-lg rounded-md flex items-center px-4 py-3">
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="What are you craving for today?"
              className="w-full outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* CATEGORIES SECTION */}
      <div className="pt-20 pb-16 px-6 md:px-16">
        <h2 className="text-center text-gray-800 font-semibold text-lg mb-10">
          Popular Categories
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard title="Jollof Delights" image="/cat1.jpg" />
          <CategoryCard title="Swallow & Soups" image="/cat2.jpg" />
          <CategoryCard title="Grills & BBQ" image="/cat3.jpg" />
          <CategoryCard title="Sweet Treats" image="/cat4.jpg" />
          <CategoryCard title="Jollof Delights" image="/cat2.jpg" />
          <CategoryCard title="Jollof Delights" image="/cat3.jpg" />
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
      {/* SCROLL TOP */}
      <ScrollTop />
    </div>
  );
}
