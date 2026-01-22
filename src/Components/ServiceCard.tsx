export interface Service {
  id?: number;
  title: string;
  description: string;
  price: string;
}

export default function ServiceCard({ title, description, price }: Service) {
  return (
    <div className="w-90 bg-white rounded-2xl">
      <div className="my-3 px-3 font-mono font-bold text-lg text-black">
        {title}
      </div>
      <div className="my-3 px-3 font-mono text-black">{description}</div>
      <div className="my-3 px-3 font-mono text-blue-500">{price}</div>
    </div>
  );
}
