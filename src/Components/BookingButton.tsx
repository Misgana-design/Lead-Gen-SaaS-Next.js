"use client";

export default function BookingButton() {
  const handleBooking = () => {
    alert("Booking system coming soon! This is a Client Component action.");
  };

  return (
    <button
      onClick={handleBooking}
      className="bg-blue-600 text-black px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
    >
      Book Now
    </button>
  );
}
