"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BorderGlide } from "../../ui/border-glide";
import Image from "next/image";
import { ISpecialty } from "@/types";

type SpecialtiesProps = {
  specialties: ISpecialty[];
};

export default function Specialties({ specialties }: SpecialtiesProps) {
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
          {specialties?.map((item) => (
            <BorderGlide
              key={item.id}
              className="max-w-lg mx-auto w-full  h-[200px] "
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
                  <Image src={item.icon} alt="icone" width={55} height={50} />
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
