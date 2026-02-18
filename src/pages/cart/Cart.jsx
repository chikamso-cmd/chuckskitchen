import { useState } from "react";
import Navbar  from "../../components/Navbar";
import { CartItem } from "../../components/CartItem";

export default function Cartpage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1625943555419-56a2cb596640",
    },
    {
      id: 2,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1604908176997-43119e99a27d",
    },
    {
      id: 3,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1617196034738-26c5e9fa6f5c",
    },
    {
      id: 4,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1625943555419-56a2cb596640",
    },
  ]);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-lightGray bg-gray-200">
      <Navbar />

      <div className="max-w-6xl mx-auto p-4 md:p-8 ">
        <div className="bg-white rounded-md shadow-sm p-6 mt-25">
          <h1 className="text-xl font-semibold mb-6">Your Cart</h1>

          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeItem={removeItem}
              />
            ))}
          </div>

          <button className="mt-6 text-sm text-blue-600 hover:underline">
            + Add more items from Chuks Kitchen
          </button>
        </div>
      </div>
    </div>
  );
}

