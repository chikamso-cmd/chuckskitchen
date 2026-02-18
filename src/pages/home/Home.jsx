import Navbar from "../../components/Navbar";
import CategoryCard from "../../components/CategoryCard";
import { FaSearch } from "react-icons/fa";
import Footer from "../../components/Footer";
import ScrollTop from "../../components/ScrollToTop";
import jollofs from "../../assets/jollofs.svg";
import swallow from "../../assets/swallow.svg";
import grills from "../../assets/grills.svg";
import sweet from "../../assets/sweet.svg";
import { Chefscategory } from "../../components/Constants";
import {Link} from "react-router-dom" 
import NewAdditionBanner from "../../components/NewAdditionBanner";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative">
        {/* Background Image */}
        <div className="h-[420px] bg-cover bg-center hero1">
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

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md text-sm font-medium w-fit transition cursor-pointer">
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
          <CategoryCard title="Jollof Delights" image={jollofs} />
          <CategoryCard title="Swallow & Soups" image={swallow} />
          <CategoryCard title="Grills & BBQ" image={grills} />
          <CategoryCard title="Sweet Treats" image={sweet} />
          <CategoryCard title="Jollof Delights" image={grills} />
          <CategoryCard title="Jollof Delights" image={jollofs} />
        </div>
        <p className="text-center mt-8 text-blue-400">
          {" "}
          <Link to="/categories">View All Categories</Link>
        </p>
        {/*  CHEFS SPECIAL CATEGORIES SECTION */}
        <h1 className="text-center mt-20">Chefs Special</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {Chefscategory.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out p-3"
            >
              <Link to="/productdetails">
                <div>
                  {category.image && (
                    <img src={category.image} alt="" loading="lazy" className="w-full rounded-t"/>
                  )}
                  <div className="p-4 text-left">
                    <h2 className="text-gray-700 text-sm font-medium">
                      {category.title}
                    </h2>
                    <p className="text-gray-700 text-sm font-medium">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="flex items-center justify-between">
                <p className="text-orange-500 px-5 font-medium">
                  {category.price}
                </p>
                <button className="bg-orange-500 text-white px-5 rounded py-2 font-medium">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-blue-400">
          {" "}
          <Link to="/categories">View All Categories</Link>
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
