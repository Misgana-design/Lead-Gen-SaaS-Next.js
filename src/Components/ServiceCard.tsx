"use client"; // Required for animations and the booking button logic

import { motion } from "framer-motion";
import BookingButton from "./BookingButton"; // Make sure this file exists!

export interface Service {
  id?: number;
  title: string;
  description: string;
  price: string;
}

export default function ServiceCard({ title, description, price }: Service) {
  return (
    <motion.div
      // Animation settings
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4 }}
      // Layout settings
      className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div>
        <div className="font-bold text-xl text-black mb-2">{title}</div>
        <div className="text-gray-600 mb-4 leading-relaxed">{description}</div>
      </div>

      <div className="mt-4">
        <div className="font-bold text-blue-600 text-lg mb-3">{price}</div>
        <BookingButton label="Select Service" variant="outline" />
      </div>
    </motion.div>
  );
}
