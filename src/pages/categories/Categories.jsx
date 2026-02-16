import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollTop from "../../components/ScrollToTop";
import {
  JollofRices,
  popularproducts,
  productcategories,
  Swallow_Soup,
} from "../../components/Constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="h-[420px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
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
      <div className="px-5 mt-5">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularproducts.map((popularproduct) => (
            <div
              key={popularproduct.id}
              className="bg-white rounded-lg p-2 flex md:flex-col md:p-5 items-center gap-5 py-3"
            >
              <div className="w-20 h-20 rounded-md md:w-full md:h-auto">
                {popularproduct.image && (
                  <img src={popularproduct.img} alt="" className="w-full" />
                )}
              </div>
              <div>
                <h2 className="font-bold text-[20px]">
                  {popularproduct.title}
                </h2>
                <p>{popularproduct.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-orange-500 font-medium">
                    {popularproduct.price}
                  </p>
                  <button className="rounded-full bg-amber-500 text-white px-1.5 cursor-pointer text-center font-medium">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-blue-400">
          {" "}
          <Link to="/categories">View All Categories</Link>
        </p>

        {/*  JOLLOF RICE CATEGORIES SECTION */}
        <h2 className="text-center text-gray-800 font-semibold text-lg mb-10 mt-10">
          Jollof Rice & Entrees
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {JollofRices.map((jollof) => (
            <div
              key={jollof.id}
              className="bg-white rounded-lg p-2 flex md:flex-col md:p-5 items-center gap-5 py-3"
            >
              <div className="w-20 h-20 rounded-md md:w-full md:h-auto">
                {jollof.image && (
                  <img src={jollof.img} alt="" className="w-full" />
                )}
              </div>
              <div>
                <h2 className="font-bold text-[20px]">{jollof.title}</h2>
                <p>{jollof.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-orange-500 font-medium">{jollof.price}</p>
                  <button className="rounded-full bg-amber-500 text-white px-1.5 cursor-pointer text-center font-medium">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-blue-400">
          {" "}
          <Link to="#">View All Categories</Link>
        </p>

        {/*  CHEFS SPECIAL CATEGORIES SECTION */}
        <h2 className="text-center text-gray-800 font-semibold text-lg mb-10 mt-10">
          Swallow & Soup
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {Swallow_Soup.map((swallow) => (
            <div
              key={swallow.id}
              className="bg-white rounded-lg p-2 flex md:flex-col md:p-5 items-center gap-5 py-3"
            >
              <div className="w-20 h-20 rounded-md md:w-full md:h-auto">
                {swallow.image && (
                  <img src={swallow.img} alt="" className="w-full" />
                )}
              </div>
              <div>
                <h2 className="font-bold text-[20px]">{swallow.title}</h2>
                <p>{swallow.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-orange-500 font-medium">{swallow.price}</p>
                  <button className="rounded-full bg-amber-500 text-white px-1.5 cursor-pointer text-center font-medium">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-blue-400">
          {" "}
          <Link to="#">View All Categories</Link>
        </p>
        {/* NEW MENU SECTION */}
        <section>
          <div className="mt-10 w-full image py-20 px-5 md:px-10 text-white relative">
            {/* <img src={jollofs} alt="" className="w-100" /> */}
            {/* <div className="bg-black/50 absolute z-10"></div> */}
            <h1 className="font-bold text-[32px] py-4">
              Introducing Our New Menu Additions!
            </h1>
            <p className="font-semibold">
              Explore exciting new dishes, crafted with the freshest <br />{" "}
              ingridients and authentic Nigerian flavours, limited time <br />
              offer!
            </p>
            <button className="bg-orange-500 text-white px-5 py-2 rounded mt-5 cursor-pointer hover:bg-orange-600 transition-colors ease-in-out duration-500 font-medium">
              Discover what's new
            </button>
          </div>
        </section>
      </div>
      {/* FOOTER */}
      <Footer />
      {/* SCROLL TOP */}
      <ScrollTop />
    </div>
  );
}
