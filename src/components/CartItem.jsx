
import { Plus, Minus, X } from "lucide-react";
export const CartItem = ({ item, increaseQty, decreaseQty, removeItem}) => {
  return (
    <div className="border border-gray-100 shadow-lg rounded-md p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 rounded-md object-cover"
        />

        <div>
          <h2 className="font-bold text-gray-800 text-[26px]">{item.name}</h2>
          <p className="text-sm text-gray-500 font-semibold">{item.description}</p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center justify-between w-full md:w-auto gap-6">
        {/* Quantity Stepper */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => decreaseQty(item.id)}
            className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
          >
            <Minus size={14} />
          </button>

          <span className="text-lg font-medium w-6 text-center">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQty(item.id)}
            className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
          >
            <Plus size={14} />
          </button>
        </div>

        {/* Price */}
        <div className="text-brand font-semibold text-lg min-w-[80px] text-right">
          ₦{(item.price * item.quantity).toLocaleString()}
        </div>

        {/* Remove */}
        <button
          onClick={() => removeItem(item.id)}
          className="bg-brand text-white w-6 h-6 flex items-center justify-center rounded text-xs hover:opacity-90"
        >
          <X size={12} />
        </button>
      </div>
    </div>
  );
}
