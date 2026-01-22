// 1. The Interface (The "Contract")
interface ServiceProps {
  title: string;
  description: string;
  price: string;
}

// 2. The Component
export default function ServiceCard({
  title,
  description,
  price,
}: ServiceProps) {
  return (
    <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-blue-600 font-semibold">{price}</span>
    </div>
  );
}
