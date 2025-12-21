"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type Timeline = {
  date: string;
  title: string;
  content: string;
};

const timelineData: Timeline[] = [
  {
    date: "2025",
    title: "Software Engineer Intern @ Uber",
    content: "Uber Eats - Crafted a paymentless checkout system for 1 of Australia’s biggest grocery chain 🛒"
  },
  {
    date: "2025",
    title: "Software Engineer Intern @ LinkedIn",
    content: "LinkedIn Ads - Shipped new ads incentives type, cut fraud 💸"
  },
  {
    date: "2024",
    title: "Software Engineer Intern @ Agoda",
    content:"Created data lineage visualization tool for bookings storage, reduced query time by 20X 📊"  
  },
  {
    date: "2025",
    title: "Software Engineer Intern @ Caltech",
    content: "Launched a Python package to detect internal methionine and generates TIS sequence to control gene expressions 🧬"
    },
];

export default function Timeline() {
  return (
    <div className="w-full">
      <div className="relative mx-auto max-w-3xl">
          {/* Subtle vertical line */}

          {timelineData.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-12 pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 top-5 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-white" />

              {/* Content */}
              <h4 className="text-lg font-normal text-neutral-900">
                {entry.title}
              </h4>
              <p className="mb-2 text-sm text-neutral-500">{entry.date}</p>
              <Card className="border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
                <CardContent className="px-5 py-4">
                  <p className="leading-relaxed text-neutral-600">
                    {entry.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
    </div>
  );
}

