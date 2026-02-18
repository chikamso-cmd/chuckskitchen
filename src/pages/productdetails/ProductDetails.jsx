import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "../../components/Navbar"
import { SectionTitle, RadioOption, CheckboxOption } from "../../components/ui/UI";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop"

export default function ProductDetailsPage() {
  const [protein, setProtein] = useState("Fried Chicken");
  const [extras, setExtras] = useState([]);

  const toggleExtra = (item) => {
    if (extras.includes(item)) {
      setExtras(extras.filter((e) => e !== item));
    } else {
      setExtras([...extras, item]);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex flex-1 flex-col lg:flex-row mt-30">
        {/* LEFT IMAGE SECTION */}
        <div className="lg:w-1/2 w-full h-[400px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1625943555419-56a2cb596640"
            alt="Jollof Rice"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:w-1/2 w-full bg-lightGray p-6 flex justify-center">
          <div className="w-full max-w-xl bg-white rounded-lg shadow-sm p-6 relative">
            {/* Close button */}
            <button className="absolute top-4 right-4 bg-black text-white p-1 rounded">
              <X size={16} />
            </button>

            <h1 className="text-2xl font-semibold mb-2">
              Jollof Rice with Fried Chicken
            </h1>

            <p className="text-brand text-xl font-semibold mb-4">₦2,800</p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our signature Jollof rice, cooked to perfection with aromatic
              spices, served with juicy, golden-fried chicken. A classic
              Nigerian comfort food, rich in flavor and satisfying. Perfect for
              a quick lunch or a hearty dinner.
            </p>

            {/* Tags */}
            <div className="flex gap-6 text-sm text-gray-500 mb-6">
              <span>🌶 Mildly spicy</span>
              <span>🥗 Vegetarian option available</span>
              <span className="text-blue-600 cursor-pointer">
                View Allergies
              </span>
            </div>

            {/* PROTEIN */}
            <SectionTitle title="Choose Your Protein" />
            <RadioOption
              label="Fried Chicken"
              defaultTag="(Default)"
              selected={protein}
              setSelected={setProtein}
            />
            <RadioOption
              label="Grilled Fish"
              price="+₦500"
              selected={protein}
              setSelected={setProtein}
            />
            <RadioOption
              label="Beef"
              price="+₦700"
              selected={protein}
              setSelected={setProtein}
            />

            {/* EXTRAS */}
            <SectionTitle title="Extra Sides (Optional)" />

            <CheckboxOption
              label="Fried Plantain"
              price="+₦700"
              extras={extras}
              toggleExtra={toggleExtra}
            />
            <CheckboxOption
              label="Coleslaw"
              price="+₦500"
              extras={extras}
              toggleExtra={toggleExtra}
            />
            <CheckboxOption
              label="Extra Pepper Sauce"
              price="+₦300"
              extras={extras}
              toggleExtra={toggleExtra}
            />

            {/* Instructions */}
            <SectionTitle title="Special Instructions" />
            <textarea
              placeholder="E.g no onion, food is too spicy..."
              className="w-full border border-borderGray rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              rows={4}
            />
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
}




