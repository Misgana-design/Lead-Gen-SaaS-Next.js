"use client";

import { useState } from "react";
import { createLead } from "@/app/actions/leads"; // Import your action!
import { motion } from "framer-motion";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // 1. Get data from the form fields
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      service: "General Inquiry", // We can hardcode this for now
    };

    // 2. Call the Server Action like a normal function!
    const result = await createLead(data);

    if (result.success) {
      setMessage("Thanks! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset(); // Clear the form
    }
    setLoading(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <section className="max-w-md mx-auto mt-20 p-8 border rounded-2xl bg-gray-50">
        <h2 className="text-2xl text-black font-bold mb-6">Request a Quote</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Your Name"
            required
            className="p-3 text-black border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="p-3 text-black border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Get Started"}
          </button>

          {message && (
            <p className="text-green-600 text-center font-medium">{message}</p>
          )}
        </form>
      </section>
    </motion.div>
  );
}