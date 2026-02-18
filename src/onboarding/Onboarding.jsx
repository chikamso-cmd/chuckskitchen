import Feature from "../components/Features";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollToTop";
import { FaUtensils, FaTruck, FaStore } from "react-icons/fa";
import onboarding from '../assets/onboarding.svg'
import {useEffect} from "react"
import {Link, useNavigate} from "react-router-dom"

export default function Onboarding() {
const navigate = useNavigate();

useEffect(() => {
  const hasOnboarded = localStorage.getItem("hasOnboarded");
  if (hasOnboarded === "true") {
    navigate("/home");
  }
}, [navigate]);

const handleStartOrder = () => {
  localStorage.setItem("hasOnboarded", "true");
  navigate("/home");
}


  return (
    <div className="bg-gray-100 min-h-screen flex justify-center p-4">
      <div className="w-full max-w-7xl bg-white shadow-xl overflow-hidden">

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="h-[520px] lg:h-auto">
            <img
              src={onboarding}
              alt="Nigerian food"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-gray-100 px-12 py-10 flex flex-col justify-between">

            {/* TOP BAR */}
            <div className="flex justify-between items-center">
              <div></div>

              <h1 className="absolute left-1/2 -translate-x-1/2 text-orange-500 italic text-lg tracking-wide">
                Chuks Kitchen
              </h1>

              <Link to="/login">
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md text-sm hover:bg-blue-50 transition">
                  Sign In
                </button>
              </Link>
            </div>

            {/* CONTENT */}
            <div className="mt-14">
              <h2 className="text-3xl font-semibold text-gray-800 leading-tight">
                Your Authentic Taste of Nigeria
              </h2>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-md">
                Experience homemade flavors delivered fresh to your desk or
                home. We bring the rich culinary heritage of Nigeria right to
                your doorstep.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mt-8">
                <Feature icon={<FaUtensils />} text="Freshly Prepared" />
                <Feature icon={<FaStore />} text="Support Local Business" />
                <Feature icon={<FaTruck />} text="Fast & Reliable Delivery" />
              </div>

              {/* BUTTONS */}
              <div className="mt-10 space-y-4 max-w-md flex gap-2 flex-col">
                
                  <button onClick={handleStartOrder} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium transition">
                    Start Your Order
                  </button>
               

                <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-md font-medium hover:bg-blue-50 transition">
                  Learn More About Us
                </button>
              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="pt-12 text-xs text-gray-500 flex justify-between border-t mt-12">
              <span>© {new Date().getFullYear()} Chuks Kitchen.</span>
              <div className="space-x-4">
                <a href="#" className="hover:text-gray-700">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-gray-700">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <ScrollTop />
      </div>
    </div>
  );
}