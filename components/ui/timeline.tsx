"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import uberLogo from "../../app/assets/uber.jpg";
import linkedinLogo from "../../app/assets/linkedin.png";
import agodaLogo from "../../app/assets/agoda.png";
import caltechLogo from "../../app/assets/caltech.jpg";
import { StaticImageData } from "next/image";

type Timeline = {
  company: string;
  title: string;
  content: string;
  logo: StaticImageData;
};

const timelineData: Timeline[] = [
  {
    company: "LinkedIn | Current",
    title: "Software Engineer",
    content: "Creating economic opportunity for every member of the global workforce 🛠️",
    logo: linkedinLogo
  },
  {
    company: "Uber",
    title: "Software Engineer Intern",
    content: "Uber Eats - Crafted a paymentless checkout system for 1 of Australia's biggest grocery chain 🛒",
    logo: uberLogo
  },
  {
    company: "LinkedIn",
    title: "Software Engineer Intern",
    content: "LinkedIn Ads - Shipped new ads incentives type, cut fraud 💸",
    logo: linkedinLogo
  },
  {
    company: "Agoda",
    title: "Software Engineer Intern",
    content:"Created data lineage visualization tool for bookings storage, reduced query time by 20X 📊",
    logo: agodaLogo
  },
  {
    company: "Caltech",
    title: "Software Engineer Intern",
    content: "Launched a Python package to detect internal methionine and generates TIS sequence to control gene expressions 🧬",
    logo: caltechLogo
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
              className="relative mb-12 pl-8 md:pl-10"
            >
              {/* Company Logo - Rounded Rectangle */}
              {/* Hidden on mobile, visible on md+ */}
              <div className="hidden md:block absolute left-[-56px] top-0 w-12 h-12 rounded-lg overflow-hidden bg-white border-2 border-neutral-200 shadow-sm z-10">
                <Image
                  src={entry.logo}
                  alt={`${entry.title} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-2 top-5 h-3 w-3 rounded-full bg-cyan-500 ring-2 md:ring-4 ring-white z-20" />

              {/* Content */}
              <h4 className="text-lg font-normal text-neutral-900">
                {entry.title}
              </h4>
              <p className="mb-2 text-sm text-neutral-500">{entry.company}</p>
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

