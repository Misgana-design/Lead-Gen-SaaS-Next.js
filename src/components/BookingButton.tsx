"use client";

interface ButtonProps {
  label?: string; 
  variant?: "primary" | "outline"; // We can choose between two styles
  onClick?: () => void;
}

export default function BookingButton({
  label = "Book Now", // Default value if nothing is passed
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-2 rounded-lg font-bold transition-all duration-200 w-full";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={() => alert(`Redirecting to ${label}...`)}
    >
      {label}
    </button>
  );
}
