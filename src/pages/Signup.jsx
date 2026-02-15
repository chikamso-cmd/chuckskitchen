import { useState } from "react";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollToTop";
import { FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import onboarding from "../assets/onboarding.svg";
import { BsGoogle, BsApple } from "react-icons/bs";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowConfirmPassword] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center p-4">
      <div className="w-full max-w-7xl bg-white shadow-xl overflow-hidden">
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2">
          {/* LEFT IMAGE WITH ORANGE OVERLAY */}
          <div className="relative h-[600px] lg:h-auto">
            <img
              src={onboarding}
              alt="Nigerian Food"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-orange-500/75 flex flex-col justify-center items-center text-center px-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Chuks Kitchen
              </h1>

              <p className="mt-6 text-white text-sm md:text-base max-w-md leading-relaxed">
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </p>
            </div>
          </div>

          {/* RIGHT REGISTER PANEL */}
          <div className="bg-gray-100 px-12 py-16 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
              {/* LOGO */}
              <h2 className="text-center text-orange-500 italic text-lg mb-2">
                Chuks Kitchen
              </h2>

              <h3 className="text-center text-gray-800 font-semibold text-xl mb-8">
                Create Your Account
              </h3>

              <form className="space-y-5">
                {/* EMAIL */}
                <div>
                  <label className="block text-xs text-gray-600 mb-2">
                    Email
                  </label>

                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-sm" />
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      required
                      className="w-full border border-gray-300 rounded-md py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-xs text-gray-600 mb-2">
                    Phone number
                  </label>

                  <div className="relative">
                    <FaPhone className="absolute left-3 top-3 text-gray-400 text-sm" />
                    <input
                      type="text"
                      required
                      placeholder="8123340690"
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
                      placeholder="QWE123##"
                      className="w-full border border-gray-300 rounded-md py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                      type="button"
                      className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div>
                  <label className="block text-xs text-gray-600 mb-2">
                    Confirm password
                  </label>

                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-gray-400 text-sm" />
                    <input
                      required
                      type={showPasswordConfirm ? "text" : "password"}
                      placeholder="QWE123##"
                      className="w-full border border-gray-300 rounded-md py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                      type="button"
                      className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-500"
                      onClick={() =>
                        setShowConfirmPassword(!showPasswordConfirm)
                      }
                    >
                      {showPasswordConfirm ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>

                {/* TERMS CHECKBOX */}
                <div className="flex items-start gap-2 text-xs text-gray-600">
                  <input type="checkbox" className="mt-1 accent-orange-500" />
                  <p>
                    I agree to the{" "}
                    <Link to="#" className="text-blue-600 hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
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
                  className="w-full border border-gray-300 py-2.5 rounded-md text-sm hover:bg-gray-50 transition flex items-center gap-3 justify-center"
                >
                  <BsGoogle />
                  Continue with Google
                </button>

                <button
                  type="button"
                  className="w-full border border-gray-300 py-2.5 rounded-md text-sm hover:bg-gray-50 transition flex items-center gap-3 justify-center"
                >
                   <BsApple /> Continue with Apple
                </button>

                {/* LOGIN LINK */}
                <p className="text-center text-xs text-gray-500">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Sign In
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
