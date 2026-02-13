export default function CategoryCard({ title, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
      <img src={image} alt={title} className="h-40 w-full object-cover" />

      <div className="p-4 text-center">
        <p className="text-gray-700 text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}
