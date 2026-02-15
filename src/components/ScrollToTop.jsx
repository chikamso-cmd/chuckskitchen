import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-orange-400 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition"
    >
      <FaArrowUp size={14} />
    </button>
  );
}