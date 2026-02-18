import {useState} from 'react'
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollToTop";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import onboarding from "../assets/onboarding.svg";
import Navbar from "../components/Navbar";

export default function Login() {
  const [showPassword, setShowPassword] = useState (false)
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <Navbar />
      <div className="w-full max-w-7xl bg-white shadow-xl overflow-hidden mt-30 rounded-lg">
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2">
          {/* LEFT SIDE IMAGE WITH OVERLAY */}
          <div className="relative h-[550px] lg:h-auto hidden md:flex">
            <img
              src={onboarding}
              alt="Nigerian Food"
              className="w-full h-full object-cover"
            />

            {/* ORANGE OVERLAY */}
            <div className="absolute inset-0 bg-orange-500/70 flex flex-col justify-center items-center text-center px-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Chuks Kitchen
              </h1>

              <p className="mt-6 text-white text-sm md:text-base max-w-md leading-relaxed font-semibold">
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </p>
            </div>
          </div>

          {/* RIGHT LOGIN PANEL */}
          <div className="bg-gray-100 px-12 py-14 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
              {/* LOGO */}
              <h2 className="text-center text-orange-500 italic text-lg mb-2">
                Chuks Kitchen
              </h2>

              <h3 className="text-center text-gray-800 font-semibold text-xl mb-8">
                Login your Account
              </h3>

              {/* FORM */}
              <form className="space-y-5">
                {/* EMAIL */}
                <div>
                  <label className="block text-xs text-gray-600 mb-2">
                    Email or phone number
                  </label>

                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-sm" />
                    <input
                      required
                      type="text"
                      placeholder="name@gmail.com"
                      className="w-full border border-gray-300 rounded-md py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block text-xs text-gray-600 mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-gray-400 text-sm" />
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••"
                      className="w-full border border-gray-300 rounded-md py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                      type="button"
                      className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>

                  <div className="text-right mt-2">
                    <Link
                      to="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                {/* CONTINUE BUTTON */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium transition">
                  Continue
                </button>

                {/* DIVIDER */}
                <div className="text-center text-xs text-gray-500">
                  Or continue with
                </div>

                {/* SOCIAL BUTTONS */}
                <button
                  type="button"
                  className="w-full border border-gray-300 py-2.5 rounded-md text-sm hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                 <FaGoogle /> Continue with Google
                </button>

                <button
                  type="button"
                  className="w-full border border-gray-300 py-2.5 rounded-md text-sm hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                 <FaApple /> Continue with Apple
                </button>

                {/* SIGNUP LINK */}
                <p className="text-center text-xs text-gray-500">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-blue-600 hover:underline">
                    Create an account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        <Footer />
        <ScrollTop />
      </div>
    </div>
  );
}
