export default functionn HomePage() {
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
    </main>
  );
}
