import ServiceCard from "@/Components/ServiceCard";

export default function HomePage() {
  const SERVICES = [
    {
      title: "Haircut & Style",
      description: "Premium cut with hot towel finish.",
      price: "$40",
    },
    {
      title: "Beard Trim",
      description: "Precision shaping and grooming.",
      price: "$25",
    },
    {
      title: "The Works",
      description: "Full cut, beard, and facial massage.",
      price: "$60",
    },
  ];
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
      {/* THE HERO SECTION */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-center tracking-tight">
        Premium Care for <br />
        <span className="text-blue-600">Your Local Community</span>
      </h1>

      <p className="mt-6 text-lg text-gray-600 text-center max-w-2xl">
        Experience top-tier service with our expert team. Book your appointment
        in under 60 seconds.
      </p>

      {/* THE CALL TO ACTION (CTA) */}
      <div className="mt-10 flex gap-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Book Now
        </button>
        <button className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
          Our Services
        </button>
      </div>
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
