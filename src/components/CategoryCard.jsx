export default function CategoryCard({ title, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">
      <img src={image} alt={title} className="h-50 w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out" />

      <div className="p-4 text-center">
        <p className="text-gray-700 text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}
