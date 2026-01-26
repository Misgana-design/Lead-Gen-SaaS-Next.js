import Link from "next/link";
import BookingButton from "./BookingButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold text-white tracking-tighter italic"
        >
          LOCAL<span className="text-blue-500">BIZ</span>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link
            href="/admin"
            className="hover:text-white transition text-blue-400"
          >
            Admin Dashboard
          </Link>
        </div>

        {/* CTA */}
        <div className="w-40">
          <BookingButton label="Join Now" />
        </div>
      </div>
    </nav>
  );
}
