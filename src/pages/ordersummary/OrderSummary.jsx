import { useState } from "react";
import Navbar  from "../../components/Navbar";
import Footer  from "../../components/Footer";
import ScrollTop from "../../components/ScrollToTop";

export default function OrderSummary() {
  const [deliveryType, setDeliveryType] = useState("delivery");

  return (
    <div className="min-h-screen bg-lightGray">
      <Navbar />

      <div className="flex justify-center items-start py-10 px-4">
        <div className="w-full max-w-md bg-white border border-borderGray rounded-lg shadow-sm p-6">
          {/* Title */}
          <h1 className="text-xl font-semibold mb-6">Order Summary</h1>

          {/* Promo Section */}
          <div className="mb-6">
            <p className="text-sm mb-2">Add a Promo Code</p>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter Code here"
                className="flex-1 border border-borderGray rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button className="bg-brand text-white px-5 rounded-md text-sm font-medium hover:opacity-90">
                Login
              </button>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="text-sm space-y-2 mb-4">
            <PriceRow label="Subtotal" amount="₦9,200" />
            <PriceRow label="Delivery Fee" amount="₦500" />
            <PriceRow label="Service Fee" amount="₦200" />
            <PriceRow label="Tax" amount="₦0" />
          </div>

          {/* Divider */}
          <div className="border-t border-borderGray my-4" />

          {/* Total */}
          <div className="flex justify-between items-center font-semibold text-lg mb-5">
            <span>Total</span>
            <span>₦9,900</span>
          </div>

          {/* Delivery Toggle */}
          <div className="flex bg-gray-200 rounded-md overflow-hidden mb-6">
            <button
              onClick={() => setDeliveryType("delivery")}
              className={`flex-1 py-2 text-sm font-medium transition ${
                deliveryType === "delivery"
                  ? "bg-brand text-white"
                  : "text-gray-600"
              }`}
            >
              Delivery
            </button>
            <button
              onClick={() => setDeliveryType("pickup")}
              className={`flex-1 py-2 text-sm font-medium transition ${
                deliveryType === "pickup"
                  ? "bg-brand text-white"
                  : "text-gray-600"
              }`}
            >
              Pick up
            </button>
          </div>

          {/* Special Instructions */}
          <div className="mb-6">
            <p className="text-sm mb-2">Special Instructions for Restaurant</p>

            <textarea
              rows="4"
              placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhhhh food is tasty"
              className="w-full border border-borderGray rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand resize-none"
            />
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-brand text-white py-3 rounded-md font-medium hover:opacity-90 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <ScrollTop />
      <Footer />
    </div>
  );
}

/* ================= PRICE ROW ================= */

function PriceRow({ label, amount }) {
  return (
    <div className="flex justify-between text-gray-600">
      <span>{label}</span>
      <span>{amount}</span>
    </div>
  );
}
