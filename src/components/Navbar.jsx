import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "My Orders", path: "/orders" },
    { name: "Account", path: "/account" },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm px-6 md:px-16 py-4 flex justify-between items-center fixed w-full z-50">
        {/* Logo */}
        <h1 className="text-orange-500 italic font-semibold">Chuks Kitchen</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-medium"
                  : "text-gray-700 hover:text-orange-500"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link to="/login">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm transition">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={22} />
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* SIDE DRAWER */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-orange-500 italic font-semibold">
                  Chuks Kitchen
                </h2>
                <FaTimes
                  className="cursor-pointer"
                  size={20}
                  onClick={() => setIsOpen(false)}
                />
              </div>

              {/* Links */}
              <div className="flex flex-col space-y-6 text-sm">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-500 font-medium"
                        : "text-gray-700 hover:text-orange-500"
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <Link to="/login">
                  <button
                    className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition w-full "
                  >
                    Login
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
