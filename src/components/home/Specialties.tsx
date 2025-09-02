"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  Baby,
  HeartPulse,
  Pill,
  TestTube,
  Activity,
  MoreHorizontal,
} from "lucide-react";
import { BorderGlide } from "../ui/border-glide";

const specialties = [
  {
    id: 1,
    title: "General Physician",
    description:
      "Cold, flu, fever, vomiting, infections, headaches or any other general issues.",
    icon: <Stethoscope className="w-10 h-10 text-purple-600" />,
  },
  {
    id: 2,
    title: "Pediatrics",
    description:
      "Any children’s health related issues including physical, behavioral and more.",
    icon: <Baby className="w-10 h-10 text-purple-600" />,
  },
  {
    id: 3,
    title: "Gynae & Obs",
    description:
      "Women’s health related issues including pregnancy, menstruation and more.",
    icon: <HeartPulse className="w-10 h-10 text-purple-600" />,
  },
  {
    id: 4,
    title: "Dermatology",
    description:
      "Treatment of diseases related to skin, hair and nails and other concerns.",
    icon: <Activity className="w-10 h-10 text-purple-600" />,
  },
  {
    id: 5,
    title: "Internal Medicine",
    description:
      "Prevention, diagnosis, and treatment of adults across the spectrum.",
    icon: <Pill className="w-10 h-10 text-purple-600" />,
  },
  {
    id: 6,
    title: "Endocrinology",
    description: "Treatment of diseases related to problems with hormones.",
    icon: <TestTube className="w-10 h-10 text-purple-600" />,
  },
  {
    id: 7,
    title: "More",
    description: "Explore many more clinical areas available.",
    icon: <MoreHorizontal className="w-10 h-10 text-purple-600" />,
  },
];

export default function Specialties() {
  return (
    <section className="bg-purple-50 mt-10 py-12 px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Left side heading */}
        <h3 className="text-purple-600 font-medium">Available specialties</h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-8">
          Explore Doctors from{" "}
          <span className="text-purple-600">50+ clinical areas</span>
        </h2>

        {/* Grid for specialties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((item) => (
            <BorderGlide
              key={item.id}
              className="max-w-lg mx-auto w-full mx-auto h-[185px] "
              autoPlayInterval={6000}
              borderDuration={5000}
              borderColor="radial-gradient(ellipse, #3b82f6, transparent)"
              borderWidth="8rem"
            >
              <Card
                key={item.id}
                className="hover:shadow-xl hover:cursor-pointer hover:border transition-shadow duration-300 rounded-2xl"
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                  {item.icon}
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </BorderGlide>
          ))}
        </div>
      </div>
    </section>
  );
}
