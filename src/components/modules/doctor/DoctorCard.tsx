"use client";
import { Calendar, StarIcon, VideoIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { IDoctor } from "@/types";
import Link from "next/link";

type DoctorCardProps = {
  doctor: IDoctor;
};

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="w-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <Link href={`/doctor/${doctor?.id}`} passHref>
      <CardContent className="p-5 flex flex-row items-center md:items-start gap-6">
        {/* Left: Avatar + Rating + Experience */}
        <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-1/5">
          <div className="border w-[110px] border-purple-400">
            <Image
              src={doctor?.profilePhoto}
              height={50}
              width={100}
              className="w-full bg-contain "
              alt="Doctor"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-gray-800">
              {doctor.experience}+ Years
            </p>
            <p className="text-xs text-gray-500">Experience</p>
          </div>
        </div>

        {/* Middle: Details */}
        <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
          <div className="flex justify-between items-center">
            <h2 className="text-sm md:text-xl font-bold text-gray-900">
              {doctor.name}
            </h2>
          </div>

          <p className="text-sm text-gray-600">{doctor?.qualification}</p>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mt-1">
            {doctor?.doctorSpecialties?.map((ds) => (
              <p
                key={ds?.specialitie?.id}
                className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md"
              >
                {ds?.specialitie?.title}
                hello
              </p>
            ))}
          </div>

          {/* Workplace */}
          <div className="mt-2">
            <p className="text-sm text-gray-500">Working in</p>
            <p className="text-sm font-medium text-gray-800">
              {doctor?.currentWorkingPlace}
            </p>
          </div>

          {/* Availability */}
          <div>
            <p className="text-sm font-normal text-gray-600"> Available for</p>

            <div className="flex gap-3 items-center">
              <p className="text-sm text-green-600 font-medium mt-1 flex items-center gap-1">
                <VideoIcon className="w-4 h-4" /> Instant Video Call
              </p>
              <p className="text-sm text-purple-600 font-medium mt-1 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> Online Apppintment
              </p>
            </div>
          </div>
          <p className="text-gray-600"> Address : {doctor.address}</p>
        </div>

        {/* Right: Fee */}
        <div className="flex flex-col items-center md:items-end gap-1 w-full md:w-1/5">
          <p className="text-white w-[100px] px-6 font-semibold bg-green-500 rounded-2xl">
            {" "}
            online
          </p>
          <div className="flex items-baseline gap-1">
            <span className="md:text-2xl font-bold text-blue-600">
              ৳{doctor?.appointmentFee}
            </span>
            <span className="text-xs text-gray-500">(Inc. VAT)</span>
          </div>
          <p className="text-xs text-gray-500">Per Consultation</p>
          <div className="flex items-center text-yellow-500 mt-5 gap-1">
            <StarIcon className="w-4 h-4 fill-current" />
            <span className="font-bold">4.9</span>
            <span className="text-gray-500 text-sm">(376)</span>
          </div>
        </div>
      </CardContent>
      </Link>
    </Card>
  );
}
