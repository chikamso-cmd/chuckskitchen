export default function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-orange-100 text-orange-500 p-3 rounded-lg text-sm">
        {icon}
      </div>
      <p className="text-gray-700 text-sm font-medium">{text}</p>
    </div>
  );
}