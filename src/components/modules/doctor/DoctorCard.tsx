"use client";

import Image from "next/image";
import { Star, Video, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
  name: string;
  image: string;
  specialties: string[];
  hospital: string;
  experience: string;
  rating: number;
  reviews: number;
  fee: number;
  discountFee?: number;
  availability?: "Online" | "Appointment" | null;
}

export default function DoctorCard({
  name,
  image,
  specialties,
  hospital,
  experience,
  rating,
  reviews,
  fee,
  discountFee,
  availability,
}: DoctorCardProps) {
  return (
    <div className="relative border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-gradient-to-br from-white to-gray-50">
      {/* Top Availability Badge */}
      {availability && (
        <span
          className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-medium ${
            availability === "Online"
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {availability}
        </span>
      )}

      <div className="flex gap-5 p-5">
        {/* Left - Doctor Image */}
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="rounded-xl border object-cover w-[100px] h-[100px]"
          />
        </div>

        {/* Middle - Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{name}</h3>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mt-1">
            {specialties.map((spec, i) => (
              <Badge
                key={i}
                className={`rounded-md ${
                  i === 0
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {spec}
              </Badge>
            ))}
          </div>

          {/* Hospital */}
          <p className="text-sm text-gray-500 mt-2">{hospital}</p>

          {/* Experience + Rating */}
          <div className="flex items-center gap-6 mt-3">
            <span className="text-sm font-medium text-gray-700">
              {experience} Years Exp.
            </span>
            <span className="flex items-center gap-1 text-yellow-500 text-sm">
              <Star size={16} className="fill-yellow-400" /> {rating} ({reviews}
              )
            </span>
          </div>

          {/* Services */}
          <div className="flex items-center gap-4 mt-3 text-sm">
            <span className="flex items-center gap-1 text-green-600">
              <Video size={16} /> Video Call
            </span>
            <span className="flex items-center gap-1 text-blue-600">
              <Calendar size={16} /> Appointment
            </span>
          </div>
        </div>

        {/* Right - Fee + Button */}
        <div className="flex flex-col items-end justify-between">
          <div className="text-right">
            {discountFee && (
              <p className="line-through text-sm text-gray-400">
                ৳{discountFee}
              </p>
            )}
            <p className="text-lg font-bold text-blue-600">৳{fee}</p>
            <p className="text-xs text-gray-500">(Inc. VAT)</p>
          </div>
          <Button className="mt-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-lg shadow hover:opacity-90">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
