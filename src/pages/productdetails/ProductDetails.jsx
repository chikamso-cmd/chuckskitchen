import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "../../components/Navbar";
import {
  SectionTitle,
  RadioOption,
  CheckboxOption,
} from "../../components/ui/UI";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import { useLocation, useParams } from "react-router-dom";
import {
  JollofRices,
  Swallow_Soup,
  popularproducts,
} from "../../components/Constants";

export default function ProductDetailsPage() {
  const [protein, setProtein] = useState("Fried Chicken");
  const [extras, setExtras] = useState([]);
  // fetching product by id from the products array
  const { id } = useParams();
  const { state } = useLocation();
  const products = [...popularproducts, ...JollofRices, ...Swallow_Soup];
  const product =
    state?.product || products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

 

  const toggleExtra = (item) => {
    if (extras.includes(item)) {
      setExtras(extras.filter((e) => e !== item));
    } else {
      setExtras([...extras, item]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex flex-col lg:flex-row justify-center pt-30 lg:flex-row justify-center gap-5 p-6">
        {/* LEFT IMAGE SECTION */}
        <div className=" rounded-lg overflow-hidden border border-gray-200 shadow-lg h-[900px]">
         
          {product.image && (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="grid place-items-center w-full lg:max-w-lg md:w-full">
          <div className="w-full bg-white rounded-lg shadow-sm p-6 relative">
            {/* Close button */}
            <button className="absolute top-4 right-4 bg-black text-white p-1 rounded">
              <X size={16} />
            </button>

            <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>

            <p className="text-brand text-xl font-semibold mb-4">
              {product.price}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {product.description}
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
