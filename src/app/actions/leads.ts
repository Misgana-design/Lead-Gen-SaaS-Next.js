// src/app/actions/leads.ts
"use server"; // 👈 This tells Next.js: "This function ONLY runs on the server"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createLead(formData: {
  name: string;
  email: string;
  service: string;
}) {
  // This is where we talk to the DB
  const newLead = await prisma.lead.create({
    data: {
      name: formData.name,
      email: formData.email,
      service: formData.service,
    },
  });

  console.log("New lead saved:", newLead);
  return { success: true };
}
